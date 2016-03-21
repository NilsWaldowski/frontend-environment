/**
 * Require config
 */
require.config({
    baseUrl: '/typo3conf/ext/gm7_sitepackage/Resources/Public/_Default/Javascript/',
    paths: {
        'jquery': '../Vendor/jquery/dist/jquery',
        'svg4everybody': '../Vendor/svg4everybody/dist/svg4everybody',
        'magnific-popup.core': '../Vendor/magnific-popup/src/js/core',
        'magnific-popup.inline': '../Vendor/magnific-popup/src/js/inline',
        'magnific-popup.gallery': '../Vendor/magnific-popup/src/js/gallery',
        'magnific-popup.image': '../Vendor/magnific-popup/src/js/image'
    },
    'deps': [
        'main'
    ]
});
