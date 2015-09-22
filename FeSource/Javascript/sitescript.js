/*------------------------------------*\
 CUSTOM FUNCTIONS
 \*------------------------------------*/

/**
 * equa height
 */
jQuery.fn.setToMaxHeight = function () {
	return this.height(Math.max.apply(this, $.map(this, function (e) {
		return $(e).height()
	})));
};

/**
 * mobileMenu Handling
 */
var mobileMenu = {
	isOpen: false,
	open: function () {
		mobileMenu.isOpen = true;
		headerMenu.addClass('js-is-visible');
	},
	close: function () {
		mobileMenu.isOpen = false;
		headerMenu.removeClass('js-is-visible');
	}
};

/**
 * Scrollto Handling
 */
function scrollTo(element) {
	$("html, body").animate(
		{
			scrollTop: $(element).offset().top
		}, 1000
	);
}

/*------------------------------------*\
 Avoid Error Function
 \*------------------------------------*/
function CpsItAvoidErrors() {

	/**
	 * "Global" vars
	 */
	document = $('document');
	body = $('body');
	window = $(window);

	mobileMenuButton = $('#js-mMenu-trigger');
	headerMenu = $('#js-mMenu');

	/**
	 * Mobile Menü Init
	 */
	mobileMenuButton.on('click', function (e) {
		e.preventDefault();
		if (mobileMenu.isOpen === false) {
			mobileMenu.open();
		} else {
			mobileMenu.close();
		}
	});

	/**
	 * EqualHeights triggering
	 */
	if ($(".equal-height").length) {
		jQuery('.equal-height').setToMaxHeight();
	}

	/**
	 * Helper Functions
	 */
	if ($("#test").length) {
		scrollTo('#test');
	}

	/**
	 * Plugin Usage
	 */

}

/*------------------------------------*\
 Dom Ready
 \*------------------------------------*/
$(document).ready(function () {
	/**
	 * BEGIN - debug the time spend for javascript to execute
	 */
		//console.time('debugTimer');

	CpsItAvoidErrors();

	/**
	 * END - debug the time spend for javascript to execute
	 */
	//console.timeEnd('debugTimer');
});