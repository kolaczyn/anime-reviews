import { Link } from 'gatsby';
import React from 'react';

type Props = {
  similarReviewOne: {
    slug: string;
    title: string;
  };
};

const SimilarReviews: React.FC<Props> = ({ similarReviewOne }) => {
  return (
    <div>
      {[similarReviewOne].map(({ slug, title }) => ( 
        <div key={slug}>
          <h2>Similar Reviews</h2>
          <Link to={`/review/${slug}`}>
            {title}
          </Link>
        </div>
       ))}
    </div>
  );
};
export default SimilarReviews;
