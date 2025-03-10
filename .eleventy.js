module.exports = function(eleventyConfig) {
    // Copy `src/css/` to `_site/css/`
    eleventyConfig.addPassthroughCopy("src/css");

    let isGitHubPages = process.env.GITHUB_ACTIONS === "true"; // Detect GitHub deployment
    let pathPrefix = isGitHubPages ? "/CrocMignon/" : "/";

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