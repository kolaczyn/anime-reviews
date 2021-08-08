import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GrFormPrevious as PreviousIcon } from 'react-icons/gr';
import { NeighboorNode } from '../../customTypes';
import classNames from 'classnames';

type Props = {
  next: NeighboorNode | null;
  previous: NeighboorNode | null;
};

const Helper: React.FC<{
  slug: string;
  title: string;
  is: 'previous' | 'next';
}> = ({ slug: slug, title, is }) => {
  return (
    <GatsbyLink
      to={`/review/${slug}`}
      className={classNames(
        'flex hover:underline items-center',
        is === 'next' ? 'flex-row-reverse' : ''
      )}
    >
      <PreviousIcon
        className={classNames(
          'text-3xl',
          is === 'next' ? 'transform -scale-x-1 ml-1' : 'mr-1'
        )}
      />
      <div>
        <div>Previous Review:</div>
        <div className="font-bold">{title}</div>
      </div>
    </GatsbyLink>
  );
};

const PreviousNextReview: React.FC<Props> = ({ next, previous }) => {
  return (
    <div>
      <div className="flex justify-between">
        {previous !== null ? (
          <Helper slug={previous.slug} title={previous.title} is="previous" />
        ) : (
          // Empty  div so next link is always on the right even if there is no previous link
          <div />
        )}
        {next !== null ? (
          <Helper slug={next.slug} title={next.title} is="next" />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
export default PreviousNextReview;
