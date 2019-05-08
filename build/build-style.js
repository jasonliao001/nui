var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', async () => {
  await gulp
    .src('../src/styles/index.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions', 'ie > 8']
      })
    )
    .pipe(cleanCSS())
    .pipe(rename('prettier.css'))
    .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('fonts', async () => {
  await gulp.src('../src/styles/common/iconfont/fonts/*.*').pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', gulp.series(gulp.parallel('css', 'fonts')));
