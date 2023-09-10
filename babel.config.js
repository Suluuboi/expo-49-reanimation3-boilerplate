module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      //reacnativereanimated3 additions
      "@babel/plugin-proposal-export-namespace-from", //for the web
      "react-native-reanimated/plugin",
    ],
  };
};
