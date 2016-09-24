//require our modules
var gulp = require('gulp');
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    mainBowerFiles = require('main-bower-files'),
    autoprefixer = require('gulp-autoprefixer');

//global src, dist and watch paths
var paths = {
  css: {
    src: ['source/scss/**/*.scss', 'bower_components/fullpage.js/dist/jquery.fullpage.min.css'],
    dist: 'source/dist/css/'
  },
  js: {
    src: ['source/js/*.js'],
    dist: 'source/dist/js/'
  }
}


//lets handle the sexy ass stylesheets
gulp.task('sass', function () {

    gulp.src(paths.css.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(sourcemaps.write('../maps'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(paths.css.dist));

});

//lets handle our js scripts
gulp.task('js', function () {
   gulp.src(mainBowerFiles({filter:/.*\.js$/}).concat(paths.js.src))
      .pipe(sourcemaps.init())
      .pipe(plumber())
    //   .pipe(jshint())
    //   .pipe(jshint.reporter('jshint-stylish'))
      .pipe(uglify())
      .pipe(concat('scripts.js'))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest(paths.js.dist));
});

//default task for dev
gulp.task('default', ['sass', 'js', 'watch'], function() {});

gulp.task('build', ['sass', 'js'], function() {});

//setup watch tasks
gulp.task('watch', function () {
  gulp.watch(paths.css.src, ['sass']);
  gulp.watch(paths.js.src, ['js']);
});
