var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
});

module.exports = {
	entry: {
		bundle: [
			'./src/js/index.js'
		],
		example1: [
			'./examples/1/index.js'
		],
		example2: [
			'./examples/2/index.js'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
    	chunkFilename: '[name].js',
    	publicPath: '/dist',
    	libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'es2015' , 'stage-0'],
						}
					}
				]				
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		extractPlugin
	]
};
