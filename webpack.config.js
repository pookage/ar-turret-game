const path                 = require("path");
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const src                  = path.resolve(__dirname, "src");
const dist                 = path.resolve(__dirname, "dist");

function buildModeOptions(mode){
	switch(mode){
		case "production":
			return {
				mode: "production",
				output: {
					filename: "bundle.js",
					path: dist,
					publicPath: "./"
				}
			};

		case "development":
		default:
			return {
				mode: "development",
				output: {
					filename: "bundle.js",
					path: dist,
					publicPath: "/"
				},
				devServer: {
					contentBase: "./dist/",
					historyApiFallback: true
				}
			};
	}
}// buildModeOptions

function buildConfig(env, args){

	const { mode } = args;

	const { ...modeOptions } = buildModeOptions(mode);

	return {
		entry: `${src}/index.js`,
		plugins: [
			new HtmlWebpackPlugin({
				template: `${src}/index.html`,
				inject: "head"
			})
		],
		...modeOptions,
		resolveLoader: {
			modules: [
				"node_modules",
				path.resolve(__dirname, "loaders")
			]
		},
		module: {
			rules: [
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							plugins: [
								"@babel/plugin-proposal-class-properties",
								"@babel/plugin-proposal-private-methods",
								"@babel/plugin-proposal-optional-chaining",
								"@babel/plugin-proposal-object-rest-spread"
							]
						}
					}
				}, {
					test: /\.scss$/,
					use: [
						{
							loader: "css-stylesheet-loader"
						},
						{ 
							loader: "to-string-loader"
						},
						{
							loader: "css-loader",
							options: {
								url: false
							}
						}, {
							loader: "sass-loader"
						}
					]
				}
			]
		},
		resolve: {
			alias: {
				COMPONENTS: `${src}/components`,
				PRIMITIVES: `${src}/primitives`,
				ELEMENTS: `${src}/elements`,
				SHARED: `${src}/shared`
			}
		}
	};
}// buildConfig

module.exports = buildConfig;

