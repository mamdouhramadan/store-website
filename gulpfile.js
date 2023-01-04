var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    soarcemap = require('gulp-sourcemaps'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin');

// start tast for pug to html
gulp.task('html', function () {
    return gulp.src(['dev/pug/pages/*.pug', 'dev/pug/pages/**/*.pug'])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('public'))
        .pipe(livereload());
})

// start task for sass to css
gulp.task('css', function () {
    return gulp.src(['dev/css/scss/*.scss', 'dev/css/libs/**/*.scss'])
        .pipe(soarcemap.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(soarcemap.write())
        .pipe(gulp.dest('public/assets/css'))
        .pipe(livereload());
});


// start task for js
gulp.task('js', function () {
    return gulp.src(['dev/js/**/*.js', 'dev/js/*.js'])
        .pipe(soarcemap.init())
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(soarcemap.write())
        .pipe(gulp.dest('public/assets/js'))
        .pipe(livereload());
});

// start task for image
gulp.task('image', function () {
    return gulp.src(['dev/img/**/*.jpg', 'dev/img/**/*.png', 'dev/img/**/*.svg', 'dev/img/**/*.gif'])
        .pipe(changed('public/assets/img'))
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets/img'))
        .pipe(livereload());
});


// start task for watch
gulp.task('watch', function () {
    require('./server');
    livereload.listen();
    gulp.watch('dev/pug/pages/**/*.pug', gulp.series('html'));
    gulp.watch(['dev/css/scss/*.scss',"dev/css/libs/**/*.scss"], gulp.series('css'));
    gulp.watch('dev/js/**/*.js', gulp.series('js'));
    gulp.watch('dev/img/**/*', gulp.series('image'));
});