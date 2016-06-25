module.exports = function(gulp, plugins, options) {

    var imageminConf = options.config.imagemin;

    var sizeConf = options.config.size;

    return function() {

        gulp.src(options.dirs.src.icons + '/**/*.svg')

            /** Check for identical files and skip those */
            .pipe(plugins.changed(options.dirs.dist.icons))

            /** File size before optimization */
            .pipe(plugins.size(sizeConf))

            /** Optimize SVGs */
            .pipe(plugins.imagemin(imageminConf))

            /** File size after optimization */
            .pipe(plugins.size(sizeConf))

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.icons))

            /** Write in deploy path */
            .pipe(plugins.gulpif(
                options.deploy === true,
                gulp.dest(options.dirs.dist.deploy.icons)
            ));
    };
};
