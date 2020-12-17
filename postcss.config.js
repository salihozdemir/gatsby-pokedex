module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: { "--tablet": "(min-width: 850px)" },
        },
        {
          customMedia: { "--desktop": "(min-width: 1140px)" },
        },
      ],
    },
  },
}
