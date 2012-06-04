(function($) {
	
	"use strict";
	
	$(function() {
		$('input[type=radio]').each(function() {
			this.checked = this.getAttribute('checked') == 'checked';
		});
	});
	
}(jQuery));
