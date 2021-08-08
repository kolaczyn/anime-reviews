import React from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import Link from '../components/ui/Link';
import { ArticlePageQuery } from '../graphql/query/__generated__/ArticlePageQuery';
import ReviewPreview from '../components/preview/ReviewPreview';
import ArticlePreview from '../components/preview/ArticlePreview';

type Props = {};

const ArticlePage: React.FC<Props> = ({}) => {
  const articles = useStaticQuery<ArticlePageQuery>(graphql`
    query ArticlePageQuery {
      allStrapiArticles {
        nodes {
          slug
          id
          title
          snippet
          subtitle
          content
          published_at
          imageSmall {
            url
          }
        }
      }
    }
  `).allStrapiArticles.nodes;

  return (
    <>
      <Helmet>
        <title>All Articles | Anime Reviews</title>
      </Helmet>
      <ContainerMedium>
        <div className="py-8">
          <div className="mb-4">
            <h1>All Articles</h1>
            <GatsbyLink to="/">
              <Link>Back to Home Page</Link>
            </GatsbyLink>
          </div>
          <div className="space-y-12 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map(article => (
                <ArticlePreview key={article.id} {...article} />
              ))}
            </div>
          </div>
        </div>
      </ContainerMedium>
    </>
  );
};
export default ArticlePage;
