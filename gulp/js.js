module.exports = function(gulp, plugins, options) {

    /** Rename */
    var renameConf = options.config.rename;

    return function() {

        gulp.src(options.dirs.src.js + '/**/*.js')

            /** JSHint */
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter())

            /** JSLint */
            .pipe(plugins.jscs())
            .pipe(plugins.jscs.reporter())

            /** Include required modules/bower_components */
            .pipe(plugins.include())
            .on('error', console.log)

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.js))

            /** Rename for Production */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.rename(renameConf)
            ))

            /** Fail to build production files if jshint find anything */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.jshint.reporter('fail')
            ))

            /** Minify JS */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.uglify()
            ))

            /** Write minified files */
            .pipe(plugins.gulpif(
                options.env === 'production',
                gulp.dest(options.dirs.dist.js)
            ));

        /**
         * build enhancement js
         */
        gulp.src(options.dirs.src.js_enhance + '/**/*.js')

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.js_enhance))

            /** Rename for Production */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.rename(renameConf)
            ))

            /** Minify JS */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.uglify()
            ))

            /** Write minified files */
            .pipe(gulp.dest(options.dirs.dist.js_enhance));
    };
};
