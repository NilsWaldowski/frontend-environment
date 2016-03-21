module.exports = function(gulp, plugins, options) {
    return function() {
        gulp.src(options.dirs.src.img_edit + '/**/*')

            // only on production minify that shit
            // todo: if condition doesn't work properly
            .pipe(plugins.gulpif(
                    options.env === 'production',
                plugins.imagemin({
                    optimizationLevel: 3,
                    interlaced: true,
                    progressive: true,
                    use: [plugins.pngquant({
                        quality: '80-85',
                        speed: 6
                    })]
                })
                )
            )

            .pipe(gulp.dest(options.dirs.dest.images_edit));
    };
};
