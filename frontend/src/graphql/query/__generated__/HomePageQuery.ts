/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageQuery
// ====================================================

export interface HomePageQuery_allStrapiReviews_nodes_imageSmall {
  __typename: "StrapiReviewsImageSmall";
  url: string | null;
}

export interface HomePageQuery_allStrapiReviews_nodes {
  __typename: "StrapiReviews";
  slug: string | null;
  id: string;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  created_at: any | null;
  imageSmall: HomePageQuery_allStrapiReviews_nodes_imageSmall | null;
}

export interface HomePageQuery_allStrapiReviews {
  __typename: "StrapiReviewsConnection";
  nodes: HomePageQuery_allStrapiReviews_nodes[];
}

export interface HomePageQuery_allStrapiArticles_nodes {
  __typename: "StrapiArticles";
  title: string | null;
  subtitle: string | null;
  published_at: any | null;
  slug: string | null;
}

export interface HomePageQuery_allStrapiArticles {
  __typename: "StrapiArticlesConnection";
  nodes: HomePageQuery_allStrapiArticles_nodes[];
}

export interface HomePageQuery {
  allStrapiReviews: HomePageQuery_allStrapiReviews;
  allStrapiArticles: HomePageQuery_allStrapiArticles;
}
