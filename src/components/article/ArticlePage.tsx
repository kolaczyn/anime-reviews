import React from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { NeighboorNode } from '../../customTypes';
import backgroundImage from '../../utils/backgroundImage';
import calculateRating from '../../utils/calculateRating';
import PreviousNext from '../ui/PreviousNextReview';
import GlassPage from '../ui/GlassPage';
import Subtitle from '../ui/Subtitle';

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

const ArticlePage: React.FC<Props> = ({ pageContext }) => {
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
            <header>
              <h1>{title}</h1>
              <Subtitle className="mb-8">{subtitle}</Subtitle>
            </header>
            <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
            <PreviousNext baseLink="/article" next={next} previous={previous} />
          </div>
        </GlassPage>
      </div>
    </>
  );
};
export default ArticlePage;
