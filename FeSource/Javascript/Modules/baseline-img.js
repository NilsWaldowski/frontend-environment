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
            $('img').baseline();
            /*
            $('img').baseline(function() {
                return parseFloat(getComputedStyle(document.documentElement, null).getPropertyValue('font-size'));
            });
            */
        }
    };

    return obj;
});
