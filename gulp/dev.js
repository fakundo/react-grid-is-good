const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const devServerPort = 8888;

const statsConfig = {
  colors: true,
  chunks: false,
  modules: false,
  hash: false,
  version: false,
  children: false
};

gulp.task('dev', function () {
  var webpackConfig = require('../webpack/webpack.config');

  gutil.log('[webpack-dev-server]', `http://localhost:${devServerPort}/webpack-dev-server/index.html`);

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(webpackConfig), {
    //hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: statsConfig
  })
  .listen(devServerPort, 'localhost', (err)=> {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
  });

});
