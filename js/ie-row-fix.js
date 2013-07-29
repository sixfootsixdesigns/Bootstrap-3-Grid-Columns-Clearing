/* fix so that rows that have a ton of columns clear the first item in each row. */
jQuery(document).ready(function($) {
	var resizeTimer = null, $doc = $(document);
	function rowPolyfill() {
		var w = $doc.width();
		jQuery('.multi-columns-row > [class^="col-"]').removeClass('first-in-row');
		if (w > 921) {
			jQuery('.multi-columns-row > .col-lg-6:nth-child(2n + 3)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-lg-4:nth-child(3n + 4)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-lg-3:nth-child(4n + 5)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-lg-2:nth-child(6n + 7)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-lg-1:nth-child(12n + 13)').addClass('first-in-row');
		} else if (w > 767) {
			jQuery('.multi-columns-row > .col-sm-6:nth-child(2n + 3)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-sm-4:nth-child(3n + 4)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-sm-3:nth-child(4n + 5)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-sm-2:nth-child(6n + 7)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-sm-1:nth-child(12n + 13)').addClass('first-in-row');
		} else {
			jQuery('.multi-columns-row > .col-6:nth-child(2n + 3)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-4:nth-child(3n + 4)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-3:nth-child(4n + 5)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-2:nth-child(6n + 7)').addClass('first-in-row');
			jQuery('.multi-columns-row > .col-1:nth-child(12n + 13)').addClass('first-in-row');
		}
	}	
	rowPolyfill();
	
	$(window).on('resize', function() {
		if (resizeTimer !== null) {
		clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(rowPolyfill, 400);
	});
});