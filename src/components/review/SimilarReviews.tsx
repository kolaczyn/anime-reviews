import { Link } from 'gatsby';
import React from 'react';
import ReviewPreview from '../preview/ReviewPreview';

type Props = {
  similarReviewOne: {
    slug: string;
    title: string;
    id: string;
    snippet: string;
    created_at: string;
    imageSmall: {
      url: string;
    };
  };
};

const SimilarReviews: React.FC<Props> = ({ similarReviewOne }) => {
  return (
    <div>
      <h2 className="mb-4">Similar Reviews</h2>
      <div>
        {[similarReviewOne].map(review => (
          <ReviewPreview key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};
export default SimilarReviews;
