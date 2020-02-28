const path = require('path');

// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports =
    {
      entry : "./src/app.js",
        output: {
          filename: 'js/main.js',
            path: path.resolve(__dirname, 'public')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test : /\.js$/,
                    exclude: /node_modules/,
                    use:[
                        'source-map-loader',
                        {
                            loader: "babel-loader",
                            options: {
                                babelrc: false,
                                presets: ['@babel/preset-env']
                            }
                        }

                    ]
                }
            ]
        },
        plugins: [
            // make sure to include the plugin!
            new VueLoaderPlugin()
        ],
        devtool: 'inline-source-map',
        productionSourceMap: false
    };