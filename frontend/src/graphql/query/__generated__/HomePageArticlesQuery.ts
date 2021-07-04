/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageArticlesQuery
// ====================================================

export interface HomePageArticlesQuery_allStrapiArticles_nodes {
  __typename: "StrapiArticles";
  title: string | null;
  subtitle: string | null;
  published_at: any | null;
  slug: string | null;
}

export interface HomePageArticlesQuery_allStrapiArticles {
  __typename: "StrapiArticlesConnection";
  nodes: HomePageArticlesQuery_allStrapiArticles_nodes[];
}

export interface HomePageArticlesQuery {
  allStrapiArticles: HomePageArticlesQuery_allStrapiArticles;
}
