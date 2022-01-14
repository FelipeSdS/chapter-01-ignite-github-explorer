const { resolve } = require('path')
const path = require('path') //  considera o caminho de acordo com o sistema operacional
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {

    mode: isDevelopment ? 'development' : 'production',

    devtool: isDevelopment ? 'eval-source-map' : 'source-map',

    entry: path.resolve(__dirname, 'src', 'index.tsx'), // arquivi principal da aplicação

    output: { // arquivo principal de "saida"(compilado) da aplicação
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: { //tipos de arquivos que o webpack pode encontrar no aplicação e que ele pode compilar
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
          },
          port: 3000,
          hot: true,
    },

    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),

    module: {
        rules: [
           {
            test: /\.(j|t)sx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        isDevelopment && require.resolve('react-refresh/babel')
                    ].filter(Boolean)
                }
            }
           },
           {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
           }
        ]
    }
}