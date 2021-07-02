import React from 'react';
import dateAndTime from 'date-and-time';
import ArticlePreviewData from '../../models/ArticlePreview';

type Props = ArticlePreviewData;

const ReviewPreview: React.FC<Props> = ({ imageSmall: {url}, title, content, created_at: date }) => {
  const asDate = new Date(date);
  const prettyDate = dateAndTime.format(asDate, 'D MMM YYYY');
  return (
    <section className="grid max-h-40 grid-cols-3 rounded-lg overflow-hidden border-light-gray border-2">
      
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("${process.env.GATSBY_STRAPI_URL}${url}")` }}
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
  );
};
export default ReviewPreview;
