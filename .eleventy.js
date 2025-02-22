module.exports = function(eleventyConfig) {
    // Copy `src/css/` to `_site/css/`
    eleventyConfig.addPassthroughCopy("src/css");
  
    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
      }
    };
  };