// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     "./node_modules/@material-tailwind/react/dist/**/*.{vue,js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {
//       colors: {
//         primary: "#022d36",
//       },
//     },
//   },
//   plugins: [],
// });

{/**tailwind config */}

module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/dist/**/*.{vue,js,ts,jsx,tsx}",
  ],
   // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#022d36",
      },
    },
  },
  variants: {
    extend: {},
  },
};

