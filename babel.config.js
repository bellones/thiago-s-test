module.exports = {
  plugins: [
      ["react-native-reanimated/plugin"],
      ["@babel/plugin-transform-private-methods", { loose: true }],
  ],
  presets: ["module:metro-react-native-babel-preset"],
};
