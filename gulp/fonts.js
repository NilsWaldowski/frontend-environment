module.exports = function(gulp, plugins, options) {

    return function() {

        gulp.src(options.dirs.src.fonts + '/**/*')

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.fonts))

            /** Write in deploy path */
            .pipe(plugins.gulpif(
                options.deploy === true,
                gulp.dest(options.dirs.dist.deploy.fonts)
            ));
    };
};
