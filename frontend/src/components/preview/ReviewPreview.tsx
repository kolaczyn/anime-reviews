import React from 'react';
import dateAndTime from 'date-and-time';
import ArticlePreviewData from '../../models/ArticlePreview';
import { Link } from 'gatsby';

type Props = {
  id: string;
  // imgSrc: string;
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  created_at: string;
  imageSmall: {
    url: string;
  };
};

const ReviewPreview: React.FC<Props> = ({
  imageSmall: { url },
  title,
  content,
  slug,
  created_at: date,
}) => {
  const asDate = new Date(date);
  const prettyDate = dateAndTime.format(asDate, 'D MMM YYYY');
  return (
    <Link to={`/review/${slug}`}>
      <section className="grid max-h-40 grid-cols-3 rounded-lg overflow-hidden border-light-gray border-2">
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("${process.env.GATSBY_STRAPI_URL}${url}")`,
          }}
        />
        {/* <img src={imgSrc} alt="" /> */}
        <div className="p-2 col-span-2 overflow-ellipsis">
          <header>
            <h4>{title}</h4>
            <span className="text-dark-gray text-sm">{prettyDate}</span>
          </header>
          <p className="leading-snug overflow-ellipsis">{content}</p>
        </div>
      </section>
    </Link>
  );
};
export default ReviewPreview;
