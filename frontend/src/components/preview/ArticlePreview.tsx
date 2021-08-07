import React from 'react';
import dateAndTime from 'date-and-time';
import ArticlePreviewData from '../../models/ArticlePreview';
import { Link as GatsbyLink } from 'gatsby';
import strapiUrl from '../../utils/strapiUrl';
import ReactMarkdown from 'react-markdown';
import backgroundImage from '../../utils/backgroundImage';

type Props = {
  // id: string;
  // imgSrc: string;
  title: string;
  snippet: string;
  slug: string;
  // content: string;
  published_at: string;
  imageSmall: {
    url: string;
  };
};

const ArticlePreview: React.FC<Props> = ({
  imageSmall,
  title,
  slug,
  snippet,
  // content,
  published_at: date,
}) => {
  const asDate = new Date(date);
  const prettyDate = dateAndTime.format(asDate, 'D MMM YYYY');
  return (
    <GatsbyLink className="inline-block group" to={`/review/${slug}`}>
      <section>
        <div
          className="bg-center bg-no-repeat bg-cover w-full rounded-md overflow-hidden mb-2"
          style={{
            ...backgroundImage(imageSmall.url),
            // minHeight: '20rem',
            aspectRatio: '2 / 1',
          }}
        />
        <header>
          <h3 className="leading-tight group-hover:underline">{title}</h3>
          <span className="text-dark-gray text-sm">{prettyDate}</span>
        </header>
        <div className="leading-snug overflow-ellipsis">
          <ReactMarkdown>{snippet}</ReactMarkdown>
        </div>
      </section>
    </GatsbyLink>
  );
};
export default ArticlePreview;
