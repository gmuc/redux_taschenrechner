module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: 'public/dist/app.js',
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				query: {
					presets: ['es2015', 'react'],
				},
			},
		],
	},

	/*
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel',
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,

				query: {
					presets: ['es2015', 'react'],
				},
			},
		],
	},
	*/
	// 			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },

	// Create Sourcemaps for the bundle
	devtool: 'source-map',
};
