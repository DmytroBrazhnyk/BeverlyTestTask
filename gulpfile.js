const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const babel = require('gulp-babel'); 

gulp.task('sass', function() {
    return gulp.src('src/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js') 
        .pipe(babel({
            presets: ['@babel/preset-env'] 
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('src/css/**/*.scss', gulp.series('sass'));
    gulp.watch('src/**/*.html', gulp.series('html'));
    gulp.watch('src/img/**/*', gulp.series('images'));
    gulp.watch('src/js/**/*.js', gulp.series('scripts')); 
    gulp.watch('dist/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'html', 'images', 'scripts', 'serve'));