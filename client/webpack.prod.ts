import { resolve } from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import WorkboxPlugin from "workbox-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerWebpackPlugin from "css-minimizer-webpack-plugin";
import { DefinePlugin } from "webpack";

export default {
    entry: "./src/index.ts",
    mode: "production",
    devtool: false, //"inline-source-map",
    stats: "verbose",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "dist"),
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new CssMinimizerWebpackPlugin({})],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: false,
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
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/views/index.html",
            filename: "index.html",
        }),
        new WorkboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new CleanWebpackPlugin({
            dry: true,
        }),
        new DefinePlugin({
            prod_flag: JSON.stringify(true),
        }),
    ],
    resolve: {
        extensions: [".ts", ".js"],
        extensionAlias: {
            ".js": [".js", ".ts"],
        },
    },
};
