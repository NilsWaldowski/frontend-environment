module.exports = function(gulp, plugins, options) {

    return function() {

        gulp.src(options.dirs.src.icons + '/**/*.svg')

            /** create PNG fallback files */
            .pipe(plugins.svg2png())

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.icons))

            /** Write in deploy path */
            .pipe(plugins.gulpif(
                options.deploy === true,
                gulp.dest(options.dirs.dist.deploy.icons)
            ));
    };
};
