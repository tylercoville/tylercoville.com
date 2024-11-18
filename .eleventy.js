module.exports = function(eleventyConfig) {
  // Copy `assets` folder to the output directory `_site`
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

