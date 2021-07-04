require('dotenv-safe').config();

const { GATSBY_STRAPI_URL: gatsbyStrapiUrl } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Anime Reviews',
    siteUrl: 'https://anime-reviews.kolaczyn.com',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: gatsbyStrapiUrl,
        queryLimit: 1000,
        collectionTypes: ['reviews', 'articles'],
        singleTypes: ['donate-page'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['montserrat 700', 'lato 400 700'],
      },
      display: 'swap',
    },
    'gatsby-plugin-layout',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-postcss',
    },
  ],
};
