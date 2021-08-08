import React from 'react';
import { Helmet } from 'react-helmet';
import { NeighboorNode } from '../../customTypes';
import backgroundImage from '../../utils/backgroundImage';
import calculateRating from '../../utils/calculateRating';
import GlassPage from '../ui/GlassPage';
import AnimeRatings from './AnimeRatings';
import PreviousNextReview from './PreviousNextReview';
import Review from './Review';
import SimilarReviews from './SimilarReviews';

type Props = {
  pageContext: {
    next?: NeighboorNode;
    previous?: NeighboorNode;
    title: string;
    subtitle: string;
    published_at: string;
    content: string;
    story: number;
    background: {
      url: string;
    };
    opening: number;
    characters: number;
    awesomeness: number;
    similarReviewOne: {
      slug: string;
      id: string;
      title: string;
      snippet: string;
      created_at: string;
      imageSmall: {
        url: string;
      };
    };
  };
};

const ReviewPage: React.FC<Props> = ({ pageContext }) => {
  const {
    title,
    subtitle,
    published_at,
    background,
    content,
    similarReviewOne,
    story,
    opening,
    characters,
    awesomeness,
    next,
    previous,
  } = pageContext;
  const overallRating = calculateRating(
    story,
    opening,
    characters,
    awesomeness
  );
  return (
    <>
      <Helmet>
        <title>{title} | Anime Reviews</title>
      </Helmet>
      <div
        className="bg-fixed bg-cover bg-center py-20"
        style={{
          ...backgroundImage(background.url),
          paddingTop: '60vh',
          paddingBottom: '60vh',
        }}
      >
        <GlassPage>
          <div className="space-y-8">
            <Review
              title={title}
              subtitle={subtitle}
              published_at={published_at}
              content={content}
              overallRating={overallRating}
            />
            <AnimeRatings
              ratings={{ story, opening, characters, awesomeness }}
            />
            {similarReviewOne ? (
              <SimilarReviews similarReviewOne={similarReviewOne} />
            ) : null}
            <PreviousNextReview next={next} previous={previous} />
          </div>
        </GlassPage>
      </div>
    </>
  );
};
export default ReviewPage;
