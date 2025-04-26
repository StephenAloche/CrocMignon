console.log("Eleventy configuration is running!");
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
    /*
  eleventyConfig.addShortcode("comparisonSlider", function(beforeImage, afterImage) {
    return `
<div class="image-comparison">
      <div class="images-container">
        <img class="before-image" src="${beforeImage}" alt="" />
        <img class="after-image" src="${afterImage}" alt="" />

        <div class="slider-line"></div>
        <div class="slider-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>

        <input type="range" class="slider" min="0" max="100" />
      </div>
    </div>
    `;
  });
*/
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

