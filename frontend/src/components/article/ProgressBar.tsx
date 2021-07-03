import classNames from 'classnames';
import React from 'react';

type Props = {
  percentage: number;
  label: string;
};

const ProgressBar: React.FC<Props> = ({ percentage, label }) => {
  // the percentage is below 30, the bar is red, if it's below 60 it's yellow
  // otherwise it's green
  const color = percentage < 30 ? 'red' : percentage < 60 ? 'yellow' : 'green';
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between text-dark-gray">
        <span>{label}</span>
        <span>{percentage}%</span>
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
export default ProgressBar;
