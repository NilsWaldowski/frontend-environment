/** Require gulp/node plugins for this project */
var notifier = require('node-notifier'),
    gulp = require('gulp'),
    minimist = require('minimist'),
    del = require('del'),
    fs = require('fs'),
    plugins = require('gulp-load-plugins')({
        // load every plugin, not just "gulp-" plugins
        pattern: [
            '*',
            '!jshint'
        ],
        rename: {
            'gulp-if': 'gulpif',
            'gulp-scss-lint': 'scsslint',
            'postcss-image-inliner': 'imageinliner',
            'postcss-flexibility': 'flexibility'
        }
    });


/** Options */
var knownOptions = {
        string: 'env',
        default: {env: process.env.NODE_ENV || 'development'}
    },
    options = minimist(process.argv.slice(2), knownOptions);
//console.log('Environment Variable: ' + options.env);


/**
 * Load configuration and directory files
 * -> Change dirs file in order to match project
 */
options.dirs = JSON.parse(fs.readFileSync('./gulp/config/dirs_typo3.json'));
options.config = JSON.parse(fs.readFileSync('./gulp/config/config.json'));


/** require tasks from gulp directory */
function getTask(task) {
    return require('./gulp/' + task)(gulp, plugins, options);
}


/** Clean */
gulp.task('clean-intern', function() {
    return del([options.dirs.dist.intern.base + '/**/*'], {force: true});
});

gulp.task('clean-deploy', function() {
    return del([options.dirs.dist.deploy.base + '/**/*'], {force: true});
});


/** CSS */
gulp.task('css', getTask('css'));


/** Fonts */
gulp.task('fonts', getTask('fonts'));


/** Images */
gulp.task('images', getTask('images'));


/** SVG Icons */
gulp.task('svg-min', getTask('svg-min'));
gulp.task('svg-png', getTask('svg-png'));
gulp.task('svg-sprite', getTask('svg-sprite'));
gulp.task('icons', ['svg-min', 'svg-png', 'svg-sprite']);


/** Modernizr */
gulp.task('modernizr', getTask('modernizr'));


/** JS */
gulp.task('js', getTask('js'));


/** Browser Sync */
gulp.task('browser-sync', getTask('browser-sync'));


/** Patternlab */
gulp.task('pl-watch', getTask('pl-watch'));
gulp.task('pl-generate', getTask('pl-generate'));
gulp.task('pl-build', getTask('pl-build'));


/**  Watch */
gulp.task('watch', function() {
    gulp.watch(options.dirs.src.scss + '/**/*.scss', ['css']);
    gulp.watch(options.dirs.src.js + '/**/*.js', ['js']);
    gulp.watch(options.dirs.patternlab.files, ['pl-build']);
});

/**  Default */
gulp.task('default', ['watch', 'browser-sync']);

/** Init */
gulp.task('init', function() {

    gulp.start(
        'css',
        'js',
        'modernizr',
        'fonts',
        'images',
        'icons'
    );

    notifier.notify({
        title: 'Init Task Complete My Master!',
        message: 'Have A Nice Day!'
    });
});

/** Write Deploy (i.e. to typo3 Extension) */
gulp.task('deploy', ['clean-deploy'], function() {
    options.env = 'production';
    options.deploy = true;

    gulp.start(
        'css',
        'js',
        'modernizr',
        'fonts',
        'images',
        'icons'
    );

    notifier.notify({
        title: 'Deploy Task Complete My Master!',
        message: 'Have A Nice Day!'
    });
});
