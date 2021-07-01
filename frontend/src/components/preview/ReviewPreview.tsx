import React from 'react';
import ArticlePreviewData from '../../models/ArticlePreview';

type Props = ArticlePreviewData;

const ReviewPreview: React.FC<Props> = ({ imgSrc, title, content, date }) => {
  return (
    <section className="grid max-h-40 grid-cols-3 rounded-lg _____overflow-hidden border-light-gray border-2">
      
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("${imgSrc}")` }}
        />
        {/* <img src={imgSrc} alt="" /> */}
        <div className="p-2 col-span-2 overflow-ellipsis">
          <header>
            <h4>{title}</h4>
            <span className="text-dark-gray text-sm">{date}</span>
          </header>
          <p className="leading-snug overflow-ellipsis">{content}</p>
        </div>
      
    </section>
  );
};
export default ReviewPreview;
