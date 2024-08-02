const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');

// Компиляція SCSS у CSS
gulp.task('sass', function() {
    return gulp.src('src/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// Об'єднання і мінімізація JS файлів
gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

// Інклуди HTML файлів
gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// Копіювання зображень
gulp.task('images', function() {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
});

// Налаштування BrowserSync
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('src/css/**/*.scss', gulp.series('sass'));
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));
    gulp.watch('src/**/*.html', gulp.series('html'));
    gulp.watch('src/img/**/*', gulp.series('images')); // Додаємо спостереження за зображеннями
    gulp.watch('dist/*.html').on('change', browserSync.reload);
});

// Завдання за замовчуванням
gulp.task('default', gulp.series('sass', 'scripts', 'html', 'images', 'serve'));

