module.exports = async (ctx, next) => {
  return ctx.unauthorized("Access denied");
};
