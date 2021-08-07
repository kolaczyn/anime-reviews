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
import strapiUrl from '../../utils/strapiUrl';
import backgroundImage from '../../utils/backgroundImage';
import GlassPage from '../ui/GlassPage';

type Props = {
  pageContext: {
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

const ReviewPage: React.FC<Props> = ({
  pageContext: {
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
      <div
        className="bg-fixed bg-cover bg-center py-20"
        style={{
          ...backgroundImage(background.url),
          paddingTop: '60vh',
          paddingBottom: '25vh',
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
            <SimilarReviews similarReviewOne={similarReviewOne} />
          </div>
        </GlassPage>
      </div>
    </>
  );
};
export default ReviewPage;
