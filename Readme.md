# Frontend Starter Kit

This Starter Kit is a setup for robust and scalable web development with performance in mind. It contains a
Pattern-Library, Tests for code quality and handles typical developer tasks like image optimization, minifying files
and a build/deploy setup for a live environment.

## Build with:

* [Patternlab](http://patternlab.io/)
* [Gulp](http://gulpjs.com/)
* [Browsersync](https://www.browsersync.io/)
* [JSHint](http://jshint.com/)
* [JSCS](http://jscs.info/)
* [scsslint](https://github.com/brigade/scss-lint)

## Quick Start

* `npm install` - install dependencies
* `gulp pl-generate` - install Patternlab
* `gulp init` - generate assets from FeSource directory (CSS, JS, Images, SVGs/Sprites, Fonts)
* `gulp watch` - detecting changes in css, js and mustache files
* `gulp browser-sync` - initialize browsersync
* `gulp deploy` - copy files from Patternlab to to live environment

Use environment variables for CSS/JS Tasks in order to build additional minified files in the Patternlab setup:
* `gulp task --env production`

## Features

* Designed with progressive enhancement
* Designed for high performance
* Designed for maintainable CSS with [ITCSS Architecture](http://cssguidelin.es/)
* Includes
   * [normalize.css](http://necolas.github.io/normalize.css/)
   * [fastclick](https://github.com/ftlabs/fastclick)
   * [svg4everybody](https://github.com/jonathantneal/svg4everybody)
   * [html5shiv](https://github.com/aFarkas/html5shiv)
   * [jQuery](https://jquery.com/)
   * [Susy](http://susy.oddbird.net/)
   * [Filament Group - enhance](https://github.com/filamentgroup/enhance)
   * [Filament Group - loadCSS](https://github.com/filamentgroup/loadCSS)
   * [Filament Group - loadJS](https://github.com/filamentgroup/loadJS)


## Further Documentation

### SCSS folder structure

* 0-settings: Global variables, site-wide settings, config switches, etc.
* 1-utilities: Site-wide mixins and functions.
* 2-generic: Low-specificity, far-reaching rulesets (e.g. resets).
* 3-base: Unclassed HTML elements (e.g. a {}, blockquote {}, address {}).
* 4-objects: Objects, abstractions, and design patterns (e.g. .media {}).
* 5-components: Discrete, complete chunks of UI (e.g. .carousel {}). This is the one layer that inuitcss doesn’t get involved with.
* 6-helpers: Helper classes (e.g. .clearfix {}).
* 6-trumps: High-specificity, very explicit selectors. Overrides and helper classes (e.g. .hidden {}).

### JS folder structure
todo

### SVGs
todo

### Images
todo

## Special thanks to

* Brad Frost [Patternlab](http://patternlab.io/) & [Blog](http://bradfrost.com/)
* Dave Olsen [Patternlab](http://patternlab.io/)
* Harry Roberts [CSS Architecture](http://cssguidelin.es/)
* Scott Jehl & Filament Group [Progressive Enhancement and Loading JS](https://github.com/filamentgroup/) & [Performance](https://www.filamentgroup.com/lab/performance-rwd.html)
* Jeremy Keith [Progressive Enhancement](https://vimeo.com/134260131)
* Zell Liew [Susy](http://zellwk.com/blog/a-complete-tutorial-to-susy/)
