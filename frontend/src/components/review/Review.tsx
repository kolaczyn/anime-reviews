import classNames from 'classnames';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import percentageToColor from '../../utils/percentageToColor';
import Subtitle from '../ui/Subtitle';
import OverallScore from './OverallScore';

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
      <header className="flex justify-between items-end">
        <h1>{title}</h1>
        <OverallScore overallRating={overallRating} />
      </header>
      <Subtitle className="mb-8">{subtitle}</Subtitle>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </section>
  );
};
export default Review;
