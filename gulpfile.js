var gulp = require('gulp'),
    uglify = require('gulp-uglify')
    concat = require('gulp-concat'),
    htmlreplace = require('gulp-html-replace'),
    minifyHTML = require('gulp-minify-html');

gulp.task('scripts', function () {
  return gulp.src('js/*.js')
  .pipe(concat('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
  return gulp.src(['css/*.css', 'css/*/*.css'])
  .pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function () {
  return gulp.src('fonts/*.*')
  .pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', function () {
  return gulp.src('index.html')
  .pipe(htmlreplace({
    js: 'js/scripts.min.js'
  }))
  .pipe(minifyHTML({
    conditionals: true,
    spare:true
  }))
  .pipe(gulp.dest('dist'));
})

gulp.task('default', ['scripts', 'styles', 'html', 'fonts']);