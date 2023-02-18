module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    /** Rules of react */
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",

    /** Rules generals */
  },
};
