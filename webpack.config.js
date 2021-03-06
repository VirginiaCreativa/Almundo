const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.jsx',
		app: './src/app.jsx',
		imports: './src/scripts/imports.js'
	},
	watch: true,
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: '/',
		filename: '[name].bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		overlay: true,
		hot: true,
		watchContentBase: true,
		stats: {
			colors: true
		},
		port: 3000
	},
	resolve: {
		alias: {
      	jquery: path.join(__dirname, 'node_modules', 'jquery')
    	},
		extensions: [
			".scss",
			".css",
			".js",
			".json",
			".jsx"
		]
 	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
			  test: /\.(js|jsx)$/,
			  exclude: /node_modules/,
			  loader: 'eslint-loader',
			  include: path.resolve(process.cwd(), 'src'),
			  enforce: 'pre',
			  options: {
			    fix: true,
			  }
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test:   /\.css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        	{
        		loader: "css-loader",
						options: { 
      				modules: true,
      				minimize: true, 
      				importLoaders: 2,
      				localIdentName: '[name]_[local]_[hash:base64:5]'
        		}
        	},
        ]
			},
			{
				test: /\.scss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        	{
        		loader: "css-loader",
        		options: { 
              modules: true,
              minimize: true, 
              localIdentName: '[name]__[local]___[hash:base64:5]'
        		}
        	},
        	{
						loader: 'postcss-loader',
						options: {
							plugins: (loader) => {
								return [
									require('postcss-import')({
										root: loader.resourcePath
									}),
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
        	{
        		loader: 'resolve-url-loader',
						options: {
							keepQuery: true
						}
        	},
        	
        	'svg-transform-loader/encode-query', 
        	{
        		loader: "sass-loader",
        		options: {
        			modules: true, 
        			sourceMap: true,
        			importLoaders: 2,
        			localIdentName: '[name]__[local]___[hash:base64:5]'
        		}
        	},
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [
								'./src/style/_variables.scss',
								'./src/style/_global.scss'
								]
						}
					}
	      ]
			},
			{
				test: /\.(png|jpe?g|gif|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/images',
							name: '[sha512:hash:base64:10].[ext]',
							context: './assets/images'
						}
					}
				]
			},
			{
				test: /\.svg(\?.*)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'assets/images',
							name: '[sha512:hash:base64:10].[ext]',
							context: './assets/images'
						}
					},
					{
						loader: 'svg-transform-loader'
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: "url-loader?limit=80000"
			},
    	{
    		test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
    		loader: 'file-loader',
    		options: {
					outputPath: 'assets/fonts/',
					name: '[sha512:hash:base64:10].[ext]'
				}
    	}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body',
			title: 'Almundo',
			minify: {
				collapseWhitespace: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
      	chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
		new StyleLintPlugin({
			configFile: '.stylelintrc',
			syntax: "scss",
			fix: false,
			context: 'src',
			files: [
				'**/*.s?(a|c)ss',
				'**/**/*.s?(a|c)ss',
				'**/**/**/*.s?(a|c)ss',
			],
			failOnError: false,
			quiet: false
	    }),
		new webpack.ProvidePlugin({
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
			'jQuery': 'jquery',
			'$': 'jquery'
    	}),
		new BrowserSyncPlugin({
      host: 'localhost',
      files: [
        './**/*.html',
        './*.html',
        './**/*.js',
        './**/**/*.js',
        './**/**/**/*.js',
        './*.js',
        './**/*.scss',
        './**/**/*.scss',
        './**/**/**/*.scss',
        './*.scss',
        './**/*.css',
        './*.css'
      ],
      port: 3000,
      open: false,
      server: { baseDir: ['dist'] }
  	}),
  	new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};