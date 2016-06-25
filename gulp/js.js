module.exports = function(gulp, plugins, options) {

    /** Rename */
    var renameConf = options.config.rename;

    return function() {

        gulp.src(options.dirs.src.js + '/**/*.js')

            /** JSHint */
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter())

            /** Fail to build production files if jshint find anything */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.jshint.reporter('fail')
            ))

            /** JSLint */
            .pipe(plugins.jscs())
            .pipe(plugins.jscs.reporter())

            /** Fail to build production files if jshint find anything */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.jscs.reporter('fail')
            ))

            /** Include required modules/node_modules */
            .pipe(plugins.include())
            .on('error', console.log)

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.js))

            /** Write in deploy path */
            .pipe(plugins.gulpif(
                options.deploy === true,
                gulp.dest(options.dirs.dist.deploy.js)
            ))

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
            ))

            /** Write minified files in deploy path */
            .pipe(plugins.gulpif(
                options.deploy === true,
                gulp.dest(options.dirs.dist.deploy.js)
            ));

        /**
         * build enhancement js
         */
        gulp.src(options.dirs.src.js_enhance + '/**/*.js')

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.js_enhance))

            /** Write in deploy path */
            .pipe(plugins.gulpif(
                options.deploy === true,
                gulp.dest(options.dirs.dist.deploy.js_enhance)
            ))

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
            .pipe(gulp.dest(options.dirs.dist.js_enhance))

            /** Write minified files in deploy path */
            .pipe(plugins.gulpif(
                options.deploy === true,
                gulp.dest(options.dirs.dist.deploy.js_enhance)
            ));
    };
};
