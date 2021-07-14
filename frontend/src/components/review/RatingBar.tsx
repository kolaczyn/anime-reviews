import classNames from 'classnames';
import { animated, config, useSpring } from 'react-spring';
import React, { useState } from 'react';
import percentageToColor from '../../utils/percentageToColor';
import Subtitle from '../ui/Subtitle';
import clamp from '../../utils/clamp';

type Props = {
  percentage: number;
  label: string;
};

const RatingBar: React.FC<Props> = ({ percentage, label }) => {
  // the percentage is below 30, the bar is red, if it's below 60 it's yellow
  // otherwise it's green
  const [flip, set] = useState(false);
  const { width, number } = useSpring({
    from: { width: '0%', number: 0 },
    width: `${percentage}%`,
    number: percentage,
    config: config.gentle,
    // reverse: flip,
    // onRest: () => set(!flip),
  });
  const color = percentageToColor(percentage);
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between">
        <Subtitle>{label}</Subtitle>
        <animated.div>
          {number.to(n => `${clamp(n, 0, 100).toFixed(0)}%`)}
        </animated.div>
        {/* <Subtitle>{props.percentage.toJSON()}%</Subtitle> */}
      </div>
      <div className="rounded-full h-8 shadow-md overflow-hidden bg-white-600">
        <animated.div
          className={classNames(`bg-${color}`, 'h-16')}
          style={{ width }}
        />
      </div>
    </div>
  );
};
export default RatingBar;
