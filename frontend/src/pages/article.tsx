import React from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import ContainerMedium from '../components/layout/container/ContainerMedium';

type Props = {};

const ArticlePage: React.FC<Props> = ({}) => {
  return (
    <>
      <Helmet>
        <title>All Articles | Anime Reviews</title>
      </Helmet>
      <ContainerMedium>
        <div className="pt-8">
          <h1>All Articles</h1>
          <div>
            <ReactMarkdown>'**hello world**'</ReactMarkdown>
          </div>
        </div>
      </ContainerMedium>
    </>
  );
};
export default ArticlePage;
