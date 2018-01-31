const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');


// DEFAULT TASKS
gulp.task('default', ['desktop', 'mobile', 'sass', 'sass-mobile', 'minify-css', 'minify-css-mobile']);
gulp.task('default:watch', ['default', 'desktop:watch', 'mobile:watch', 'sass:watch', 'sass-mobile:watch']);



// BABEL
const babelOptions = {
    minified: true,
    presets: ['env']
};


gulp.task('desktop', () =>
    gulp.src('src-front/main.js')
        .pipe(sourcemaps.init())
        .pipe(babel(babelOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public'))
);

gulp.task('mobile', () =>
    gulp.src('src-front/main_mobile.js')
        .pipe(sourcemaps.init())
        .pipe(babel(babelOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public'))
);

gulp.task('desktop:watch', function () {
    gulp.watch('src-front/main.js', ['desktop']);
});

gulp.task('mobile:watch', function () {
    gulp.watch('src-front/main_mobile.js', ['mobile']);
});


gulp.task('sass', function () {
    return gulp.src('public/style/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/style'));
});

gulp.task('sass-mobile', function () {
    return gulp.src('public/style/main_mobile.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/style'));
});


gulp.task('sass:watch', function () {
    gulp.watch('public/style/main.sass', ['sass']);
});

gulp.task('sass-mobile:watch', function () {
    gulp.watch('public/style/main_mobile.sass', ['sass-mobile']);
});

gulp.task('minify-css', () => {
    return gulp.src('styles/main.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/style'));
});

gulp.task('minify-css-mobile', () => {
    return gulp.src('styles/main_mobile.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/style'));
});
