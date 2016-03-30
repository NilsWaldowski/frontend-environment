define([
    'jquery',
    'baseline'
], function($) {
    'use strict';

    var obj = {

        /**
         * Initialize
         */
        init: function() {
            console.log('test');
            //$('img').baseline();

            /**
             * Solution I:  keeping basegrid for figcaption and gain unwanted spaces vs.
             * Solution II: keep baseline outside of image/caption container
             */

            /*
            // Solution I
            $('.b-content-textmedia__images img').baseline(function() {
                return parseFloat(getComputedStyle(document.documentElement, null).getPropertyValue('font-size'));
            });
            */

            // Solution II
            $('.b-content-textmedia__images').baseline(function() {
                return parseFloat(getComputedStyle(document.documentElement, null).getPropertyValue('font-size'));
            });
        }
    };

    return obj;
});
