import classNames from 'classnames';
import React from 'react';
import percentageToColor from '../../utils/percentageToColor';
import Subtitle from '../ui/Subtitle';

type Props = {
  percentage: number;
  label: string;
};

const RatingBar: React.FC<Props> = ({ percentage, label }) => {
  // the percentage is below 30, the bar is red, if it's below 60 it's yellow
  // otherwise it's green
  const color = percentageToColor(percentage)
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between">
        <Subtitle>{label}</Subtitle>
        <Subtitle>{percentage}%</Subtitle>
      </div>
      <div className="rounded-full h-8 shadow-md overflow-hidden bg-white-600">
        <div
          className={classNames(`bg-${color}`, 'h-16')}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
export default RatingBar;
