import React from 'react';
import { Ratings } from '../../customTypes';
import RatingBar from './RatingBar';

type Props = {
  ratings: Ratings;
};

const AnimeRatings: React.FC<Props> = ({ ratings }) => {
  const { story, opening, characters, awesomeness } = ratings;
  return (
    <div>
      <h2 className="mb-2">Ratings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        <RatingBar label={'Story'} percentage={story} />
        <RatingBar label={'Opening'} percentage={opening} />
        <RatingBar label={'Characters'} percentage={characters} />
        <RatingBar label={'Awesomeness'} percentage={awesomeness} />
      </div>
    </div>
  );
};
export default AnimeRatings;
