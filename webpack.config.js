const path = require("path")
const webpack = require("webpack");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = {
    entry: "./src/index.js",
    output : {
        filename : "bundle.js",
        path: path.resolve(__dirname, "src"),
        publicPath: ""
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "src"),
            "node_modules"
        ],
        extensions: [".json", ".js", ".jsx"]
    },
    module : {
        rules: [
            {
                test: /\.jsx?$/,
                loader: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "webpack-transform"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: "inline"
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./src",
        hot: true,
    },
    plugins: [
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            cwd: process.cwd()
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}