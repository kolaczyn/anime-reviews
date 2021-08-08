// // exports.onCreateNode = ({node}) => {
// //   console.log(`Node created of type ${node.internal.type}`)
// // }
const path = require('path');

const createReviews = async (graphql, reporter, createPage) => {
  const { errors, data } = await graphql(`
    query Review {
      allStrapiReviews(sort: { fields: published_at, order: DESC }) {
        edges {
          previous {
            title
            slug
          }
          next {
            title
            slug
          }
          node {
            title
            slug
            subtitle
            published_at
            content
            story
            opening
            characters
            awesomeness
            similarReviewOne {
              id
              slug
              title
              snippet
              published_at
              imageSmall {
                url
              }
            }
            background {
              url
            }
          }
        }
      }
    }
  `);
  if (errors) {
    reporter.panicOnBuild('ERROR: Loading createPages query');
  }

  const reviews = data.allStrapiReviews.edges;

  reviews.forEach(({ previous, next, node }) => {
    createPage({
      path: `review/${node.slug}`,
      component: path.resolve('./src/components/review/ReviewPage.tsx'),
      context: { ...node, previous, next },
    });
  });
};

const createArticles = async (graphql, reporter, createPage) => {
  const { errors, data } = await graphql(`
    query Review {
      allStrapiArticles {
        edges {
          previous {
            title
            slug
          }
          next {
            title
            slug
          }
          node {
            slug
            title
            subtitle
            published_at
            content
            background {
              url
            }
          }
        }
      }
    }
  `);
  if (errors) {
    reporter.panicOnBuild('ERROR: Loading createArticles query');
  }

  const articles = data.allStrapiArticles.edges;

  articles.forEach(({ node, previous, next }) => {
    createPage({
      path: `article/${node.slug}`,
      component: path.resolve('./src/components/article/ArticlePage.tsx'),
      context: {
        ...node,
        previous,
        next,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  await createReviews(graphql, reporter, createPage);
  await createArticles(graphql, reporter, createPage);
};
