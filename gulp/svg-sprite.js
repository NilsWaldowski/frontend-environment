module.exports = function(gulp, plugins, options) {

    var svgSpriteConf = options.config.svgSprite;

    var imageminConf = options.config.imagemin;

    return function() {

        gulp.src(options.dirs.src.icons + '/**/*.svg')

            /** Check for identical files and skip those */
            .pipe(plugins.changed(options.dirs.dist.icons + '/sprite'))

            /** Optimize SVGs */
            .pipe(plugins.imagemin(imageminConf))

            /** create sprite file */
            .pipe(plugins.svgSprite(svgSpriteConf))

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.icons + '/sprite'))

            /** Write in deploy path */
            .pipe(plugins.gulpif(
                options.deploy === true,
                gulp.dest(options.dirs.dist.deploy.icons + '/sprite')
            ));
    };
};
