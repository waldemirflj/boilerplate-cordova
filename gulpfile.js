const del = require('del')
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify-es').default
const concat = require('gulp-concat')
const gulpif = require('gulp-if')
const htmlreplace = require('gulp-html-replace')
const sass = require('gulp-sass')
sass.compiler = require('node-sass')

function clean() {
  return del([
    './src/assets/libs',
  ])
}

function cleanWww() {
  return del([
    './www',
  ])
}

function watchFiles() {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.task('sass'));
}

gulp.task('libs', () => {
  const files = [
    './node_modules/angular/angular.min.js',
    './node_modules/oclazyload/dist/ocLazyLoad.min.js',
    './node_modules/angular-sanitize/angular-sanitize.min.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
  ]

  return gulp.src(files)
    .pipe(gulp.dest('./src/assets/libs/'))
})

gulp.task('www', () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./www/assets'))
})

gulp.task('replace', async () => {
  gulp.src('./src/index.html')
    .pipe(htmlreplace({ 'app': './bundle.js' }))
    .pipe(gulp.dest('./www'))
})

gulp.task('minify:html', async () => {
  gulp.src('./src/views/**/*.html')
    .pipe(htmlmin({ removeComments: true, collapseWhitespace: true }))
    .pipe(gulp.dest('./www/views'))
})

gulp.task('minify:js:app', async () => {
  const files = [
    './src/app.module.js',
    './src/app.constants.js',
    './src/app.config.js',
  ];

  gulp.src(files)
    .pipe(uglify())
    .on('error', (error) => console.log(error.toString()))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./www/'))
})

gulp.task('minify:js:controller', async () => {
  gulp.src('./src/views/**/*.js')
    .pipe(uglify())
    .on('error', (error) => console.log(error.toString()))
    .pipe(gulp.dest('./www/views'))
})

gulp.task('sass', () => {
  return gulp.src('./src/assets/scss/*.scss')
    .pipe(sass({ outputStyle: 'nested'})
    .on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css/'))
})

exports.watch = gulp.parallel(watchFiles)

exports.build = gulp.series(cleanWww, gulp.series([
  'sass',
  'libs',
  'www',
  'replace',
  'minify:html',
  'minify:js:app',
  'minify:js:controller',
]))

exports.default = gulp.series(clean, gulp.series(['libs']))