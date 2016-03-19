module.exports = function (gulp, plugins, options) {
	return function () {

		// build normal js
		gulp.src([options.dirs.src.js + '/**/*.js'])

			// use jshint
			.pipe(plugins.jshint())

			// use jslint
			//.pipe(plugins.jscs())

			// fail if error found
			.pipe(plugins.jscs.reporter('fail'))

			.pipe(gulp.dest(options.dirs.dest.js));

		// additional JS (which needs to be integrated inline through CMS)
		// todo: how to handle additional JS with a requireJS setup?
		if(options.env === 'production') {
			gulp.src(options.dirs.src.js_additional  + '/**/*.js')

				.pipe(gulp.dest(options.dirs.dest.js_additional))

				// uglify that shit
				.pipe(plugins.rename({suffix: '.min'}))
				.pipe(plugins.uglify())

				// write
				.pipe(gulp.dest(options.dirs.dest.js_additional));
		}

		// venodr js (generated from bower)
		gulp.src([options.dirs.src.js_vendor + '/**/*.js'])

			// write
			.pipe(gulp.dest(options.dirs.dest.js_vendor));

		// build enhancement js
		gulp.src(options.dirs.src.js_enhance + '/**/*.js')

			// only on production uglify that shit
			.pipe(plugins.gulpif(
					options.env === 'production',
					plugins.rename({suffix: '.min'}),
					plugins.uglify()
				)
			)

			// write original files
			.pipe(gulp.dest(options.dirs.dest.js_enhance))

	};
};
