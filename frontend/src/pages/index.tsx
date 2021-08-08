import React from 'react';
import classNames from 'classnames';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import ReviewPreview from '../components/preview/ReviewPreview';
import ArticlePreview from '../components/preview/ArticlePreview';
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';
// import { HomePageArticlesQuery } from '../graphql/query/__generated__/HomePageArticlesQuery';
import { HomePageQuery } from '../graphql/query/__generated__/HomePageQuery';
import Link from '../components/ui/Link';

const IndexPage = () => {
  const { allStrapiArticles, allStrapiReviews } =
    useStaticQuery<HomePageQuery>(graphql`
      query HomePageQuery {
        allStrapiReviews(
          limit: 5
          sort: { fields: published_at, order: DESC }
        ) {
          nodes {
            slug
            id
            title
            subtitle
            content
            snippet
            published_at
            imageSmall {
              url
            }
          }
        }
        allStrapiArticles(
          limit: 3
          sort: { fields: published_at, order: DESC }
        ) {
          nodes {
            title
            published_at
            id
            slug
            snippet
            imageSmall {
              url
            }
          }
        }
      }
    `);
  const articles = allStrapiArticles.nodes;
  const reviews = allStrapiReviews.nodes;

  return (
    <ContainerMedium
      className={classNames(
        'grid grid-cols-1 lg:grid-cols-3',
        'space-y-4 lg:space-y-0 lg:space-x-10',
        'py-8'
      )}
    >
      <div className="w-full md:w-2/3 lg:w-full lg:col-span-1">
        <div className="mb-4">
          <h2>Latest Articles</h2>
          <GatsbyLink to="/article">
            <Link>See all articles</Link>
          </GatsbyLink>
        </div>
        <div className="space-y-8">
          {articles.map(data => (
            <ArticlePreview key={data.slug} {...data} />
          ))}
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="mb-4">
          <h2>Latest Reviews</h2>
          <GatsbyLink to="/review">
            <Link>See all reviews</Link>
          </GatsbyLink>
        </div>
        <div className="space-y-4">
          {reviews.map(data => (
            <ReviewPreview key={data.id} {...data} />
          ))}
        </div>
      </div>
    </ContainerMedium>
  );
};

export default IndexPage;
