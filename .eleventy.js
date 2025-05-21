console.log("Eleventy configuration is running!");
module.exports = function(eleventyConfig) {
    // Copy `src/css/` to `_site/css/`
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/data_static");


    let isGitHubPages = process.env.GITHUB_ACTIONS === "true"; // Detect GitHub deployment
    let pathPrefix = isGitHubPages ? "/CrocMignon/" : "/";

    //FILTER
    eleventyConfig.addFilter('textIncludes', function(collection, textValue) {
      if (!textValue){
        return collection;
      }

        const filtered = collection.filter(item => item.includes(textValue))
        return filtered;
    });

    //SHORTCODE
     // Define a shortcode for the image comparison slider
     eleventyConfig.addShortcode("comparisonSlider", function(beforeImage, afterImage) {
      return `
  <div class="img-comp-container">
  <div class="img-comp-img">
    <img src="${beforeImage}">
  </div>
  <div class="img-comp-img img-comp-overlay">
    <img src="${afterImage}">
  </div>
</div>
      `;
    });
  // Check if a custom domain is set (GitHub Pages uses CNAME for this)
  if (process.env.CUSTOM_DOMAIN) {
    pathPrefix = "/"; // No subfolder needed with a custom domain
  }

    return {
      pathPrefix: pathPrefix,
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
      }
    };

  };

