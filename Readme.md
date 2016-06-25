# Frontend Starter Kit

This Starter Kit is a setup for robust and scalable web development with performance in mind. It contains a
Pattern-Library, Tests for code quality and handles typical developer tasks like image optimization, minifying files
and a build/deploy setup for a live environment.

**In This Documentation**

1. [Build with](#build-with)
2. [Local System Dependencies](#local-system-dependencies)
3. [Quick Start](#quick-start)
4. [Features](#features)
5. [Further Documentation](#further-documentation)
    1. [SCSS folder structure](#scss-folder-structure)
    2. [JS files and folder](#js-files-and-folder)
    3. [SVGs](#svgs)
    4. [Images folder](#images-folder)
    5. [Vendor](#vendor)
    6. [Progressive Enhancement](#progressive-enhancement)
    7. [Asynchronous Loading of JS and Fonts](#asynchronous-loading-of-js-and-fonts)
6. [Special thanks to](#special-thanks-to)


## Build with:

* [Patternlab](http://patternlab.io/)
* [Gulp](http://gulpjs.com/)
* [Browsersync](https://www.browsersync.io/)
* [JSHint](http://jshint.com/)
* [JSCS](http://jscs.info/)
* [SCSSLint](https://github.com/brigade/scss-lint)

## Local System Dependencies
* [Node.js](https://nodejs.org/) - [Download and Install](https://nodejs.org/en/download/) and add system path for if necessary
* [Ruby](https://www.ruby-lang.org/) - [Download and Install](https://www.ruby-lang.org/de/documentation/installation/)
* [Gulp](http://gulpjs.com/) - `npm install -g gulp-cli` in order to install gulp command line interface
* [Git](https://git-scm.com/) - [Download and Install](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and add system path if necessary
* [PHP](https://secure.php.net/) - Download and Install [XAMPP](https://www.apachefriends.org/) or a local Apache server and add system path if necessary

## Quick Start

* `git clone` Repository
* `npm install` - install dependencies
* `gulp pl-generate` - install Patternlab for this project
* `gulp init` - generate assets from FeSource directory (CSS, JS, Images, SVGs/Sprites, Fonts)
* `gulp watch` - detecting changes in css, js and mustache files
* `gulp browser-sync` - initialize Browsersync
* `gulp deploy` - write files to to live environment

Use environment variables for init/CSS/JS Tasks in order to build additional minified files in the Patternlab setup:
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
* 7-trumps: High-specificity, very explicit selectors. Overrides and helper classes (e.g. .hidden {}).
* 8-vendor: Vendor css/scss e.g. from jQuery plugins

### JS files and folder
* javascript.js: contains just imports for vendor files and project specific modules (gulp-include handles the inclusion)
* modules:
    * contains all project specific js files
    * each file should follow the [module design pattern](https://github.com/NilsWaldowski/module-pattern-bootstrap)

### SVGs
Use the SVG `use` element to reference an svg icon from the generated sprite file:

    <svg>
        <use xlink:href="sprite.svg#icon_name"></use>
    </svg>

### Images folder
* Images: fixed images like logos without any editorial purpose
* ImagesEditorial: contains content images which will be used/changed by editorial stuff later on (those images will
be deployed in a different path in order to make them available for editors

### Vendor
If you need additional jQuery Plugins, Frameworks or the like from [npm](https://www.npmjs.com/) you can add those
directly to the package.json file in the devDependencies section:

    "devDependencies": {
        "jquery": "^2.2",
        "svg4everybody": "^2.0",
        "html5shiv": "^3.7",
        "fastclick": "^1.0",
        "normalize-css": "^2.3",
        "susy": "^2.2"
    }

### Progressive Enhancement
todo

### Asynchronous Loading of JS and Fonts
todo

## Special thanks to

* Brad Frost [Patternlab](http://patternlab.io/) & [Blog](http://bradfrost.com/)
* Dave Olsen [Patternlab](http://patternlab.io/)
* Harry Roberts [CSS Architecture](http://cssguidelin.es/)
* Scott Jehl & Filament Group [Progressive Enhancement and Loading JS](https://github.com/filamentgroup/) & [Performance](https://www.filamentgroup.com/lab/performance-rwd.html)
* Jeremy Keith [Progressive Enhancement](https://vimeo.com/134260131)
* Zell Liew [Susy](http://zellwk.com/blog/a-complete-tutorial-to-susy/)
