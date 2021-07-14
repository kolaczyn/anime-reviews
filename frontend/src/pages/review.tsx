import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import ContainerMedium from '../components/layout/container/ContainerMedium';
import ReviewPreview from '../components/preview/ReviewPreview';
import { ReviewsPageQuery } from '../graphql/query/__generated__/ReviewsPageQuery';

export default function ReviewPage() {
  const reviews = useStaticQuery<ReviewsPageQuery>(graphql`
    query ReviewPageQuery {
      allStrapiReviews {
        nodes {
          slug
          id
          title
          snippet
          created_at
          imageSmall {
            url
          }
        }
      }
    }
  `).allStrapiReviews.nodes;

  return (
    <>
      <Helmet>
        <title>All Reviews | Anime Reviews</title>
      </Helmet>
      <ContainerMedium>
        <div className="pt-8">
          <h1 className="mb-4">All Reviews</h1>
          <div className="space-y-1 max-w-3xl">
            {reviews.map(review => (
              <ReviewPreview key={review.id} {...review} />
            ))}
          </div>
        </div>
      </ContainerMedium>
    </>
  );
}
