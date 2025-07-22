// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("styles");
  return {
    pathPrefix: "/Edge-Robotics-Studio/",
    dir: {
      input: "src",
      output: "_site"   // 👈 cleaner than "docs"
    },
  };
};
