import React from 'react';
import dateAndTime from 'date-and-time';
import ArticlePreviewData from '../../models/ArticlePreview';

type Props = ArticlePreviewData;

const ArticlePreview: React.FC<Props> = ({
  imgSrc,
  title,
  content,
  created_at: date,
}) => {
  const asDate = new Date(date);
  const prettyDate = dateAndTime.format(asDate, 'D MMM YYYY');
  return (
    <section>
      <img src={imgSrc} alt="" />
      <header>
        <h3>{title}</h3>
        <span className="text-dark-gray text-sm">{prettyDate}</span>
      </header>
      <p className="leading-snug">{content}</p>
    </section>
  );
};
export default ArticlePreview;
