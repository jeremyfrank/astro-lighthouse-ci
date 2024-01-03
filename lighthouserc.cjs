module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      settings: {
        // preset: "desktop", // comment out this line for mobile
        onlyCategories: ["performance", "accessibility"],
      },
      staticDistDir: "./dist",
      url: ["http://localhost/", "http://localhost/page-1/"],
    },
    upload: {
      target: "filesystem",
      outputDir: ".lhci",
    },
  },
};
