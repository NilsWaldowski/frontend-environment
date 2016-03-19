
module.exports = function (gulp, plugins, options) {
	return function () {

		// build normal js
		gulp.src([
			options.dirs.src.js + '/**/*.js',
			options.dirs.src.js_additional  + '/**/*.js'
		])

			// concatenate js files
			.pipe(plugins.concat('javascript.js'))

			// only on production uglify that shit
			.pipe(plugins.gulpif(
					options.env === 'production',
				plugins.rename({suffix: '.min'}),
				plugins.uglify()
				)
			)

			// write concatenated but not minified files
			.pipe(gulp.dest(options.dirs.dest.js));

		// build additional js - only in production setting
		if(options.env === 'production') {
			gulp.src(options.dirs.src.js_additional  + '/**/*.js')

				.pipe(gulp.dest(options.dirs.dest.js_additional))

				// uglify that shit
				.pipe(plugins.rename({suffix: '.min'}))
				.pipe(plugins.uglify())

				// write the uglified files in the same directories
				.pipe(gulp.dest(options.dirs.dest.js_additional));
		}

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
