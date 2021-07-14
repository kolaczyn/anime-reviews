import React from 'react';
import ReactMarkdown from 'react-markdown';
import dateAndTime from 'date-and-time';
import ArticlePreviewData from '../../models/ArticlePreview';
import { Link } from 'gatsby';
import backgroundImage from '../../utils/backgroundImage';

type Props = {
  id: string;
  // imgSrc: string;
  title: string;
  subtitle: string;
  snippet: string;
  slug: string;
  created_at: string;
  imageSmall: {
    url: string;
  };
};

const ReviewPreview: React.FC<Props> = ({
  imageSmall: { url },
  title,
  snippet,
  slug,
  created_at: date,
}) => {
  const asDate = new Date(date);
  const prettyDate = dateAndTime.format(asDate, 'D MMM YYYY');
  return (
    <Link className="inline-block" to={`/review/${slug}`}>
      <div className="grid grid-cols-3 rounded-lg overflow-hidden shadow-sm hover:shadow-md border-light-gray border-2">
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={backgroundImage(url)}
        />
        <div className="p-2 col-span-2 overflow-ellipsis">
          <header>
            <h4>{title}</h4>
            <span className="text-dark-gray text-sm">{prettyDate}</span>
          </header>
          <div className="leading-snug overflow-ellipsis">
            <ReactMarkdown>{snippet}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ReviewPreview;
