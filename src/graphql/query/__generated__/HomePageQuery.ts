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
  snippet: string | null;
  published_at: any | null;
  imageSmall: HomePageQuery_allStrapiReviews_nodes_imageSmall | null;
}

export interface HomePageQuery_allStrapiReviews {
  __typename: "StrapiReviewsConnection";
  nodes: HomePageQuery_allStrapiReviews_nodes[];
}

export interface HomePageQuery_allStrapiArticles_nodes_imageSmall {
  __typename: "StrapiArticlesImageSmall";
  url: string | null;
}

export interface HomePageQuery_allStrapiArticles_nodes {
  __typename: "StrapiArticles";
  title: string | null;
  published_at: any | null;
  id: string;
  slug: string | null;
  snippet: string | null;
  imageSmall: HomePageQuery_allStrapiArticles_nodes_imageSmall | null;
}

export interface HomePageQuery_allStrapiArticles {
  __typename: "StrapiArticlesConnection";
  nodes: HomePageQuery_allStrapiArticles_nodes[];
}

export interface HomePageQuery {
  allStrapiReviews: HomePageQuery_allStrapiReviews;
  allStrapiArticles: HomePageQuery_allStrapiArticles;
}
