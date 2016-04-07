module.exports = function(gulp, plugins, options, envCondition) {

    var postCssProcessors = [
        plugins.imageinliner({
            assetPaths: [options.dirs.patternlab.public],
            maxFileSize: 10240
        }),
        plugins.autoprefixer(
            '> 1% in DE',
            'Android >= 4.1',
            'Explorer >= 8',
            'Firefox >= 17',
            'iOS >= 6',
            'last 4 versions',
            'Opera >= 12.1',
            'Safari >= 7'
        )
    ];

    return function() {
        gulp.src(options.dirs.src.scss + '/**/*.scss')

            // lint
            .pipe(plugins.scsslint())

            // init sourcemaps
            // todo: fix sourcemaps
            //.pipe(plugins.sourcemaps.init())

            // compile scss files
            .pipe(plugins.sass({
                style: 'expanded',
                includePaths: ['FeSource/Vendor']
            }))

            // don't stop the watcher if something goes wrong
            .on("error", function handleError(err) {
                console.log(err.toString());
                this.emit('end');
            })

            .pipe(plugins.postcss(postCssProcessors))

            // optimize css files
            .pipe(plugins.cmq({log: false}))

            // write sourcemaps
            //.pipe(plugins.sourcemaps.write({includeContent: false, sourceRoot: '.'}))

            // only on production
            .pipe(plugins.gulpif(envCondition,
                plugins.rename({suffix: '.min'})
            ))
            .pipe(plugins.gulpif(envCondition,
                plugins.minifycss()
            ))
            .pipe(gulp.dest(options.dirs.dest.css));
    };
};
