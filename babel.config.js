// wtf is babel, dude?
/* 
   1-> it works to convert available coding on way where all browsers and many different environment could be understand.
  link: https://babeljs.io
*/

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
