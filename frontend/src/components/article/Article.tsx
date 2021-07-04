import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import calculateRating from '../../utils/calculateRating';
import ContainerSmall from '../layout/container/ContainerSmall';
import ProgressBar from './ProgressBar';

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

const Article: React.FC<Props> = ({
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
  return (
    <>
      <Helmet>
        <title>{title} | Anime Reviews</title>
      </Helmet>
      <ContainerSmall>
        <section>
          <header className="flex justify-between">
            <span>{title}</span>
            <span>
              {calculateRating(story, opening, characters, awesomeness)}%
            </span>
          </header>
          <span>{subtitle}</span>
          <ReactMarkdown>{content}</ReactMarkdown>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          <ProgressBar label={'Story'} percentage={story} />
          <ProgressBar label={'Opening'} percentage={opening} />
          <ProgressBar label={'Characters'} percentage={characters} />
          <ProgressBar label={'Awesomeness'} percentage={awesomeness} />
        </div>
        <h2>Similar Reviews</h2>
        <Link to={`/review/${similarReviewOne.slug}`}>
          {similarReviewOne.title}
        </Link>
      </ContainerSmall>
    </>
  );
};
export default Article;
