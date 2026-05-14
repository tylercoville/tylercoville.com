module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("postDate", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("isoDate", (date) => {
    return new Date(date).toISOString().slice(0, 10);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};
