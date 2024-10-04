import { resolve } from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { DefinePlugin } from "webpack";

export default {
    entry: "./src/index.ts",
    mode: "development",
    devtool: "source-map",
    stats: "verbose",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/views/index.html",
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        }),
        new DefinePlugin({
            prod_flag: JSON.stringify(false),
        }),
    ],
    resolve: {
        extensions: [".ts", ".js"],
        extensionAlias: {
            ".js": [".js", ".ts"],
        },
    },
    devServer: {
        port: 3500,
        allowedHosts: "all",
        hot: true,
    },
};
