import React from 'react';
import ArticlePreviewData from '../../models/ArticlePreview';

type Props = ArticlePreviewData;

const ArticlePreview: React.FC<Props> = ({
  imgSrc,
  title,
  content,
  date,
}) => {
  return (
    <section>
      <img src={imgSrc} alt="" />
      <header>
        <h3>{title}</h3>
        <span className="text-dark-gray text-sm">{date}</span>
      </header>
      <p className="leading-snug">{content}</p>
    </section>
  );
};
export default ArticlePreview;
