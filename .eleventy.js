module.exports = function(eleventyConfig) {
    // Copy `src/css/` to `_site/css/`
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");

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
      <div class="comparison-container">
        <div class="comparison-image before">
        ${beforeImage}
          <img src="${beforeImage}" alt="Before">
        </div>
        <div class="comparison-image after">
        ${afterImage}
          <img src="${afterImage}" alt="After">
        </div>
        <div class="slider-handle">
          <div class="handle-line"></div>
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

