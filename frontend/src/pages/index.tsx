import React from 'react';
import classNames from 'classnames';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import ReviewPreview from '../components/preview/ReviewPreview';
import ArticlePreview from '../components/preview/ArticlePreview';
import { graphql, useStaticQuery } from 'gatsby';
import { HomePageArticlesQuery } from '../graphql/query/__generated__/HomePageArticlesQuery';
import { HomePageReviewsQuery } from '../graphql/query/__generated__/HomePageReviewsQuery';

const IndexPage = () => {
  const articles = useStaticQuery<HomePageArticlesQuery>(graphql`
    query ArticlesQuery {
      allStrapiArticles {
        nodes {
          title
          subtitle
          published_at
          slug
        }
      }
    }
  `).allStrapiArticles.nodes;
  // const reviews = useStaticQuery<HomePageReviewsQuery>(graphql`
  //   query HomePageArticles {
  //     allStrapiReviews {
  //       nodes {
  //         slug
  //         id
  //         title
  //         subtitle
  //         content
  //         created_at
  //         imageSmall {
  //           url
  //         }
  //       }
  //     }
  //   }
  // `).allStrapiReviews.nodes;
  return (
    <ContainerMedium
      className={classNames(
        'grid grid-cols-1 lg:grid-cols-3',
        'space-y-4 lg:space-y-0 lg:space-x-4'
      )}
    >
      <div className="w-full md:w-2/3 lg:w-full lg:col-span-1">
        <h1 className="mb-6">Latest articles</h1>
        {articles.map(data => (
          <ArticlePreview key={data.slug} {...data} />
        ))}
      </div>
      {/* <div className="lg:col-span-2">
        <h2 className="mb-6">Latest Reviews</h2>
        {reviews.map(data => (
          <ReviewPreview key={data.id} {...data} />
        ))}
      </div> */}
    </ContainerMedium>
  );
};

export default IndexPage;
