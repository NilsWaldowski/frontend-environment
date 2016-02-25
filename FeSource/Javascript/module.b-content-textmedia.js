var initBContentTextmedia = function() {

	var $JsLightboxImage = $('.js-b-content-textmedia--lightbox');

	$JsLightboxImage.magnificPopup({
		type: 'image',
		image: {
			titleSrc: function(item) {
				return item.el.attr('data-description');
			}
		}
	});
};