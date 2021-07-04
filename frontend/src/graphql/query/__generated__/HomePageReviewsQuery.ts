/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageReviewsQuery
// ====================================================

export interface HomePageReviewsQuery_allStrapiReviews_nodes_imageSmall {
  __typename: "StrapiReviewsImageSmall";
  url: string | null;
}

export interface HomePageReviewsQuery_allStrapiReviews_nodes {
  __typename: "StrapiReviews";
  slug: string | null;
  id: string;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  created_at: any | null;
  imageSmall: HomePageReviewsQuery_allStrapiReviews_nodes_imageSmall | null;
}

export interface HomePageReviewsQuery_allStrapiReviews {
  __typename: "StrapiReviewsConnection";
  nodes: HomePageReviewsQuery_allStrapiReviews_nodes[];
}

export interface HomePageReviewsQuery {
  allStrapiReviews: HomePageReviewsQuery_allStrapiReviews;
}
