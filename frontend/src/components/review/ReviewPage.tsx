import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import calculateRating from '../../utils/calculateRating';
import Review from './Review';
import ContainerSmall from '../layout/container/ContainerSmall';
import Subtitle from '../ui/Subtitle';
import RatingBar from './RatingBar';
import AnimeRatings from './AnimeRatings';
import SimilarReviews from './SimilarReviews';

type Props = {
  pageContext: {
    title: string;
    subtitle: string;
    published_at: string;
    content: string;
    story: number;
    opening: number;
    characters: number;
    awesomeness: number;
    similarReviewOne: {
      slug: string;
      title: string;
      imageSmall: string;
    };
  };
};

const ReviewPage: React.FC<Props> = ({
  pageContext: {
    title,
    subtitle,
    published_at,
    content,
    similarReviewOne,
    story,
    opening,
    characters,
    awesomeness,
  },
}) => {
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
      <ContainerSmall>
        <Review
          title={title}
          subtitle={subtitle}
          published_at={published_at}
          content={content}
          overallRating={overallRating}
        />
        <AnimeRatings ratings={{ story, opening, characters, awesomeness }} />
        <SimilarReviews similarReviewOne={similarReviewOne} />
      </ContainerSmall>
    </>
  );
};
export default ReviewPage;
