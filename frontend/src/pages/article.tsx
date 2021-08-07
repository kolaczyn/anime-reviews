import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import Link from '../components/ui/Link';

type Props = {};

const ArticlePage: React.FC<Props> = ({}) => {
  return (
    <>
      <Helmet>
        <title>All Articles | Anime Reviews</title>
      </Helmet>
      <ContainerMedium>
        <div className="pt-8">
          <div className="mb-4">
            <h1>All Articles</h1>
            <GatsbyLink to="/">
              <Link>Back to Home Page</Link>
            </GatsbyLink>
          </div>
        </div>
      </ContainerMedium>
    </>
  );
};
export default ArticlePage;
