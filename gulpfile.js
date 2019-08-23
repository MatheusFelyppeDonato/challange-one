const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

function css() {
  return src('source/styles/main.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
}

function js() {
  return src('source/scripts/components/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('dist/js', { sourcemaps: true }))
}

function watchFiles(){
      watch(['source/styles/**/*.scss'], css);
      watch(['source/scripts/**/*.js'], js);
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js, watchFiles);