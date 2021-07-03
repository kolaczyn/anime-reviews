// // exports.onCreateNode = ({node}) => {
// //   console.log(`Node created of type ${node.internal.type}`)
// // }
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { errors, data } = await graphql(`
    query Review {
      allStrapiReviews {
        nodes {
          slug
          title
          subtitle
          published_at
          content
          story
          opening
          characters
          awesomeness
          background {
            url
          }
          similarReviewOne {
            slug
            title
            imageSmall {
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

  const reviews = data.allStrapiReviews.nodes;

  reviews.forEach(node => {
    createPage({
      path: `review/${node.slug}`,
      component: path.resolve('./src/components/article/Article.tsx'),
      context: node,
    });
  });
};
