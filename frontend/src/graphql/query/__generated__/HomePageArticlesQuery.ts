/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageArticlesQuery
// ====================================================

export interface HomePageArticlesQuery_allStrapiReviews_nodes_imageSmall {
  __typename: "StrapiReviewsImageSmall";
  url: string | null;
}

export interface HomePageArticlesQuery_allStrapiReviews_nodes {
  __typename: "StrapiReviews";
  slug: string | null;
  id: string;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  created_at: any | null;
  imageSmall: HomePageArticlesQuery_allStrapiReviews_nodes_imageSmall | null;
}

export interface HomePageArticlesQuery_allStrapiReviews {
  __typename: "StrapiReviewsConnection";
  nodes: HomePageArticlesQuery_allStrapiReviews_nodes[];
}

export interface HomePageArticlesQuery {
  allStrapiReviews: HomePageArticlesQuery_allStrapiReviews;
}
