import { Link } from 'gatsby';
import React from 'react';
import ContainerSmall from '../layout/container/ContainerSmall';

type Props = {
  pageContext: {
    title: string;
    subtitle: string;
    published_at: string;
    content: string;
    similarReviewOne: {
      slug: string;
      title: string;
      imageSmall: string;
    };
  };
};

const Article: React.FC<Props> = ({
  pageContext: { title, subtitle, published_at, content, similarReviewOne },
}) => {
  return (
    <ContainerSmall>
      <section>
        <header>{title}</header>
        <span>{subtitle}</span>
        <div>{content}</div>
      </section>
      <hr />
      <Link to={`/review/${similarReviewOne.slug}`}>{similarReviewOne.title}</Link>
    </ContainerSmall>
  );
};
export default Article;
