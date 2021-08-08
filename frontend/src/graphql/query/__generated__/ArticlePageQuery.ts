/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticlePageQuery
// ====================================================

export interface ArticlePageQuery_allStrapiArticles_nodes_imageSmall {
  __typename: "StrapiArticlesImageSmall";
  url: string | null;
}

export interface ArticlePageQuery_allStrapiArticles_nodes {
  __typename: "StrapiArticles";
  slug: string | null;
  id: string;
  title: string | null;
  snippet: string | null;
  subtitle: string | null;
  content: string | null;
  published_at: any | null;
  imageSmall: ArticlePageQuery_allStrapiArticles_nodes_imageSmall | null;
}

export interface ArticlePageQuery_allStrapiArticles {
  __typename: "StrapiArticlesConnection";
  nodes: ArticlePageQuery_allStrapiArticles_nodes[];
}

export interface ArticlePageQuery {
  allStrapiArticles: ArticlePageQuery_allStrapiArticles;
}
