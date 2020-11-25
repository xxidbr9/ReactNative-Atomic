module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo", "@babel/preset-typescript"],
        plugins: [
            "react-native-reanimated/plugin",
            [
                "module-resolver",
                {
                    root: ["."],
                    extensions: [
                        ".js",
                        ".jsx",
                        ".es",
                        ".es6",
                        ".mjs",
                        ".ts",
                        ".tsx"
                    ],
                    alias: {
                        '@atoms': "./src/components/atoms",
                        '@molecule': "./src/components/molecules",
                        '@organisms': "./src/components/organisms",
                        '@templates': "./src/components/templates",
                        '@screens': "./src/screens",
                        '@helpers': "./src/utils/helpers",
                        '@hooks': "./src/utils/hooks"
                    }
                }
            ]
        ]
    };
};
