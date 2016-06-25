module.exports = function(gulp, plugins, options) {

    return function() {

        /**
         * copy everything except ImagesEditorial
         */
        gulp.src([
                options.dirs.dist.base + '/**/*',
                '!' + options.dirs.dist.base + '/ImagesEditorial/**/*'
            ])

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.deploy.base));

        /**
         * copy only ImagesEditorial
         */
        gulp.src([
                options.dirs.dist.base + '/ImagesEditorial/**/*'
            ])

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.deploy.fileadminImages));

    };
};
