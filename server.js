const express = require("express");
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js')
const middleware = require('webpack-dev-middleware');
const hotmiddleware = require("webpack-hot-middleware");
const compiler = webpack(webpackConfig);
const app = express();
const fs = require('fs')

app.use(express.static(__dirname + '/dist'))

app.use(middleware(compiler, {
  noInfo: true, 
  publicPath: webpackConfig.output.publicPath
}));
app.use(hotmiddleware(compiler));

const data = fs.readFileSync('./src/assets/data/data.json');
const datas = JSON.parse(data)

app.get('/api', (req, res) => {
	res.send(datas);
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Listening 3000');
});
