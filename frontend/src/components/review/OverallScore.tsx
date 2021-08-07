import React from 'react';
import percentageToColor from '../../utils/percentageToColor';

type Props = {
  overallRating: number;
};

// possible colors:
// bg-yellow-200 bg-green-200 bg-red-200
// text-yellow bg-green bg-red
// keeping this above to make sure these styles don't get purged
const OverallScore: React.FC<Props> = ({ overallRating }) => {
  const color = percentageToColor(overallRating);
  return (
    <span
      className={`flex items-center p-1 rounded-sm bg-${color}-200 font-bold text-3xl text-${color}`}
    >
      <span>{overallRating}%</span>
    </span>
  );
};
export default OverallScore;
