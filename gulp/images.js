module.exports = function(gulp, plugins, options) {

    var imageminConf = options.config.imagemin;

    return function() {

        /** Images for Dev */
        gulp.src(options.dirs.src.images + '/**/*')

            /** Check for identical files and skip those */
            .pipe(plugins.changed(options.dirs.dist.images))

            /** Optimize Images */
            .pipe(plugins.imagemin(imageminConf))

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.images));


        /** Images for Editorials/CMS */
        gulp.src(options.dirs.src.imagesEditorial + '/**/*')

            /** Check for identical files and skip those */
            .pipe(plugins.changed(options.dirs.dist.imagesEditorial))

            /** Optimize Images */
            .pipe(plugins.imagemin(imageminConf))

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.imagesEditorial));
    };
};
