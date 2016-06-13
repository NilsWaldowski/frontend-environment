module.exports = function(gulp, plugins, options) {

    return function() {

        plugins.browserSync({
            server: {
                baseDir: options.dirs.patternlab.public
            },
            files: [
                options.dirs.dist.css + '**/*.css',
                options.dirs.dist.js + '**/*.js',
                options.dirs.patternlab.public + '**/*.html'
            ],
            ghostMode: true,
            open: "external"
        });
    };
};
