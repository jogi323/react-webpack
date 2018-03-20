module.exports = {
    "entry": "./src/index.js",
    "output": {
      "filename": "bundle.js"
    },
    module: {
      rules: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, }
      ]
    },
    mode: 'production'
  };