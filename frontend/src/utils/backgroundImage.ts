const backgroundImage = (resourceUrl: string) => ({
  backgroundImage: `url("${process.env.GATSBY_STRAPI_URL}${resourceUrl}")`,
});
export default backgroundImage;
