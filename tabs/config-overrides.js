// config-overrides.js
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    config.plugins.push(
        new ModuleFederationPlugin({
            name: "Host",
            remotes: {
                Remote: `Remote@http://localhost:1234/moduleEntry.js`,
            },
            shared: {
                ...dependencies,
                react: {
                singleton: true,
                requiredVersion: dependencies["react"],
                },
                "react-dom": {
                singleton: true,
                requiredVersion: dependencies["react-dom"],
                },
            },
        }),
    )
    return config
}