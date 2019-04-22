const del = require('del')
const gulp = require('gulp')

const libs = [
  './node_modules/angular/angular.min.js',
  './node_modules/oclazyload/dist/ocLazyLoad.min.js',
  './node_modules/angular-sanitize/angular-sanitize.min.js',
  './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
]

function clean() {
  return del([
    './src/assets/libs',
  ])
}

gulp.task('libs', () => {
  return gulp.src(libs)
    .pipe(gulp.dest('./src/assets/libs/'))
})

exports.default = gulp.series(clean, gulp.series(['libs']))