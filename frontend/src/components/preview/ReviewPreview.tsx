import React from 'react';
import ReactMarkdown from 'react-markdown';
import dateAndTime from 'date-and-time';
import ArticlePreviewData from '../../models/ArticlePreview';
import { Link as GatsbyLink } from 'gatsby';
import backgroundImage from '../../utils/backgroundImage';

type Props = {
  id: string;
  title: string;
  snippet: string;
  slug: string;
  created_at: string;
  imageSmall: {
    url: string;
  };
};

const ReviewPreview: React.FC<Props> = ({
  title,
  snippet,
  slug,
  created_at: date,
  imageSmall: { url },
}) => {
  const asDate = new Date(date);
  const prettyDate = dateAndTime.format(asDate, 'D MMM YYYY');
  return (
    <GatsbyLink className="block" to={`/review/${slug}`}>
      <div className="grid grid-cols-3 rounded-lg overflow-hidden shadow-sm hover:shadow-md border-light-gray border-2">
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{ ...backgroundImage(url), aspectRatio: '1/1' }}
        />
        <div className="p-2 col-span-2 overflow-ellipsis">
          <header>
            <h3>{title}</h3>
            <span className="text-dark-gray text-sm">{prettyDate}</span>
          </header>
          <div className="leading-snug overflow-ellipsis">
            <ReactMarkdown>{snippet}</ReactMarkdown>
          </div>
        </div>
      </div>
    </GatsbyLink>
  );
};
export default ReviewPreview;
