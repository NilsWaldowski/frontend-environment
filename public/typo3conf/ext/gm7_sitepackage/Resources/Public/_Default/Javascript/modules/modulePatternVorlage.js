/**
 * This is MyApp, it makes something awesome.
 * It's an self invokated function that runs automatically/immediately.
 */
var ModulePatternVorlage = window.ModulePatternVorlage || (function(document, window) {
    'use strict';

    /**
     * Module Pattern
     * https://github.com/NilsWaldowski/module-pattern-bootstrap/blob/master/src/module-app.js
     */
    var obj,
        _private;

    obj = {

        /**
         * The init method, is the function that initialize the project,
         * by caching variables and binding objects and can initialize
         * other methods too.
         */
        init: function() {

            this._cache();
            this._bind();

            // i.e. states which needs to be set immediately when obj is called
            _private.doSomething();
        },

        /**
         * The _cache method creates public properties that will be
         * handled by other methods. Caching elements to not have to be
         * called every single time.
         */
        _cache: function() {

            // jQuery
            this.$container = $('body');

            // vanilla JS
            this.container = document.body;
        },

        /**
         * The _bind method bind all cached dom elements from {MyApp._cache}.
         * It sets methods to events made by the DOM.
         */
        _bind: function() {

            // jQuery
            this.$container.on('click', _private.doSomethingElse);

            // vanilla JS
            this.container.addEventListener('click', _private.doSomethingElse, false);
        }
    };

    /**
     * The _private variable encapsulate all PRIVATE functions
     * and properties.
     */
    _private = {

        /**
         * The _config variable sets all properties that will be
         * handled by the app.
         */
        _config: {},

        /**
         * Logic and Functionality of the App
         */
        doSomething: function() {
            console.log('modulePatternVorlage loaded!');
        },

        doSomethingElse: function() {
            console.log('document.body was clicked!');
        }

    };

    return obj;
})(document, window);

$(document).ready(function() {
    'use strict';
    ModulePatternVorlage.init();
});
