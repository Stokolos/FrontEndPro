import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const mode = 'development';
export const devtool = "source-map";
export const entry = {
    main: resolve(__dirname, './src/index.ts'),
};
export const output = {
    path: resolve(__dirname, './dist'),
    filename: '[name].[hash].bundle.js',
};
export const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        filename: 'index.html',
    }),
];
export const devServer = {
    static: {
        directory: join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
};
export const module = {
    rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
    ],
};