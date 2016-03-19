module.exports = function (gulp, plugins, options) {
	return function () {
		gulp.src(options.dirs.src.scss + '/**/*.scss')

			// lint
			.pipe(plugins.scsslint())

			// compile scss files
			.pipe(plugins.sass({
				style: 'expanded'
			}))

			// don't stop the watcher if something goes wrong
			.on("error", function handleError(err) {
				console.log(err.toString());
				this.emit('end');
			})

			.pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))

			// optimize css files
			.pipe(plugins.cmq({log: false}))

			// todo: if contition doesn't work properly
			// only on production
			.pipe(plugins.gulpif(
				options.env === 'production',
				plugins.rename({suffix: '.min'}),
				plugins.minifycss({noAdvanced: true})
			)
			.pipe(gulp.dest(options.dirs.dest.css)));
	};
};
