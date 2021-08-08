/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ReviewsPageQuery
// ====================================================

export interface ReviewsPageQuery_allStrapiReviews_nodes_imageSmall {
  __typename: "StrapiReviewsImageSmall";
  url: string | null;
}

export interface ReviewsPageQuery_allStrapiReviews_nodes {
  __typename: "StrapiReviews";
  slug: string | null;
  id: string;
  title: string | null;
  snippet: string | null;
  subtitle: string | null;
  content: string | null;
  published_at: any | null;
  imageSmall: ReviewsPageQuery_allStrapiReviews_nodes_imageSmall | null;
}

export interface ReviewsPageQuery_allStrapiReviews {
  __typename: "StrapiReviewsConnection";
  nodes: ReviewsPageQuery_allStrapiReviews_nodes[];
}

export interface ReviewsPageQuery {
  allStrapiReviews: ReviewsPageQuery_allStrapiReviews;
}
