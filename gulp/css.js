module.exports = function(gulp, plugins, options) {

    /**
     * Pleeease
     * Load defaults and dynamic data (production & development)
     */
    var pleaseConf = options.config.pleeease;

    /** PostCSS */
    var postCssConf = [
        plugins.imageinliner(options.config.postCss.imageinliner),
        plugins.flexibility()
    ];

    /** Rename */
    var renameConf = options.config.rename;

    /** SASS */
    var sassConf = options.config.sass;

    return function() {

        gulp.src([
            options.dirs.src.scss + '/**/*.scss',
            '!' + options.dirs.src.scss + '/8-vendor/**/*.scss'])

            /** Lint SCSS */
            .pipe(plugins.scsslint())

            /** Fail to build production files if scsslint find anything */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.scsslint.failReporter()
            ))

            /** Compile SCSS to CSS */
            .pipe(plugins.sass(sassConf))

            /** Error handling */
            .on("error", plugins.util.log)

            /** Pleeease */
            .pipe(plugins.pleeease(pleaseConf))

            /** PostCss */
            .pipe(plugins.postcss(postCssConf))

            /** Write */
            .pipe(gulp.dest(options.dirs.dist.css))

            /** Rename for Production */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.rename(renameConf)
            ))

            /** Minify CSS */
            .pipe(plugins.gulpif(
                options.env === 'production',
                plugins.cleanCss()
            ))

            /** Write minified files */
            .pipe(gulp.dest(options.dirs.dist.css));

    };
};
