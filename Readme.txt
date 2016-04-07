# Start a Project

Adjustments to be done:

core/source/_data/_data.json
	search "gm7_sitepackege" & replace with "PROJECTSHORTNAME_sitepackage"

gulp/config/dirs.json
	search "gm7_sitepackege" & replace with "PROJECTSHORTNAME_sitepackage"

.gitignore
	search "source" and remove it from the .gitignore

!!! If you work in a multi-system replace the directory "_Default" with the correct rollin-name, if needed !!!
________________________________________________________________________________________________________________________

How to use pattern lab after including git repository:

0.) open console


use following commands in directory "lab" in e.g. PhpStorm terminal:

1.) "npm install"
	Installs required node modules

2.) "gulp pl-generate"
	Initial installation of pattern lab

3.) "gulp init"
	Initial task for writing css, js, image files to public folders

4.) "gulp watch"
	Task for detecting changes in css, js and Patternlab files

use following commands in a second terminal window:

5.) "gulp browser-sync"
	Browser sync

use following commands in a third terminal window:

6.) "gulp icons" + "gulp img-dev" + "gulp img-edit" or "gulp images" (combines the first three tasks)

------------------------------------------------------------------------------------------------------------------------

# Deployment and Node Environment Variables

TODO: development/production handling
Windows:    SET NODE_ENV=development
OSX/Linux:  export NODE_ENV=development

gulp task --env development
gulp task --env production


# SASS Directory / Files

* 0-settings: Global variables, site-wide settings, config switches, etc.
* 1-utilities: Site-wide mixins and functions.
* 2-generic: Low-specificity, far-reaching rulesets (e.g. resets).
* 3-base: Unclassed HTML elements (e.g. a {}, blockquote {}, address {}).
* 4-objects: Objects, abstractions, and design patterns (e.g. .media {}).
* 5-components: Discrete, complete chunks of UI (e.g. .carousel {}). This is the one layer that inuitcss doesn’t get involved with.
* 6-helpers: Helper classes (e.g. .clearfix {}).
* 6-trumps: High-specificity, very explicit selectors. Overrides and helper classes (e.g. .hidden {}).