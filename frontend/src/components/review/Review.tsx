import React from 'react';
import ReactMarkdown from 'react-markdown';
import Subtitle from '../ui/Subtitle';

type Props = {
  title: string;
  subtitle: string;
  published_at: string;
  content: string;
  overallRating: number;
};

const Review: React.FC<Props> = ({
  title,
  subtitle,
  content,
  overallRating,
}) => {
  return (
    <section>
      <header className="flex justify-between">
        <h1>{title}</h1>
        <span>{overallRating}%</span>
      </header>
      <Subtitle>{subtitle}</Subtitle>
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  );
};
export default Review;
