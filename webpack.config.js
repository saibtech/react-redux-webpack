var path = require("path")
module.exports = {
    entry: "./src/index.js",
    output : {
        filename : "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module : {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							sourceMap: true
						}
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: "inline"
						}
					}
				]
			}

        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
}