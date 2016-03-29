/**
 *
 */
define([
        'jquery',
        'Modules/popup',
        'Modules/baseline-img',
        'svg4everybody'
    ],
    function($,
        popup,
        baseline,
        svg4everybody) {
        'use strict';
        popup.init();
        baseline.init();
        svg4everybody();
    }
);
