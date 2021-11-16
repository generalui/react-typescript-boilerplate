const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const rootPath = require('./root-path')

module.exports = {
    entry: path.join(rootPath, "src", "index.tsx"),
    output: { path: path.join(rootPath, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    // devServer: { contentBase: path.join(rootPath, "src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(rootPath, "public", "index.html"),
        }),
    ],
};