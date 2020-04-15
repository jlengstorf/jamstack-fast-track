module.exports = (config) => {
  config.addPassthroughCopy('src/css');

  return {
    dir: {
      input: 'src',
    },
  };
};
