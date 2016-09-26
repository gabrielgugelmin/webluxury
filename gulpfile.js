var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('default', ['watch']);

gulp.task('watch', function() {

	livereload.listen();

  gulp.watch('app/assets/css/*.css', ['css']);
  gulp.watch('app/assets/js/*.js', ['js']);
  gulp.watch('app/**/*.html', ['html']);

  
});

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
  .pipe(gulp.dest(''))
  .pipe(livereload());
});

gulp.task('css', function() {
  return gulp.src('app/assets/css/style.css')
  .pipe(gulp.dest(''))
  .pipe(livereload());
});

gulp.task('js', function() {
  return gulp.src('app/**/*.js')
  .pipe(gulp.dest(''))
  .pipe(livereload());
});