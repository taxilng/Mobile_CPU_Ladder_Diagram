const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './src/index.js',
        cpu: './src/empty.js',
        gpu: './src/empty.js',
        mcpu: './src/empty.js',
        mgpu: './src/empty.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                },
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: '[name].[ext]', //[path] 上下文环境路径
                            publicPath: './img/', //公共路径
                            outputPath: './img/' //输出路径
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            arrts: ['img:src', 'img:data-src'],
                            minimize: false //是否压缩html
                        }
                    }
                ]
            }
        ]
    },
    //插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/mobile.html',
            hash: true,
            favicon: path.resolve('favicon.ico'),
            chunks: ['main'],
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'desktop_cpu.html',
            template: './src/other/desktop_cpu.html',
            hash: true,
            favicon: path.resolve('favicon.ico'),
            chunks: ['cpu'],
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'desktop_gpu.html',
            template: './src/other/desktop_gpu.html',
            hash: true,
            favicon: path.resolve('favicon.ico'),
            chunks: ['gpu'],
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'desktop_mcpu.html',
            template: './src/other/desktop_mcpu.html',
            hash: true,
            favicon: path.resolve('favicon.ico'),
            chunks: ['mcpu'],
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'desktop_mgpu.html',
            template: './src/other/desktop_mgpu.html',
            hash: true,
            favicon: path.resolve('favicon.ico'),
            chunks: ['mgpu'],
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true // 压缩内联css
            }
        }),
    ]
}
