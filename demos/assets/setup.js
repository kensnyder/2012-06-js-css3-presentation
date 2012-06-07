(function($) {
	
	"use strict";
	
	$(function() {
		// Firefox will remember checked radios on refresh
		// Make sure that the radios marked checked="checked"
		//   are always checked
		$('input[type=radio]').each(function() {
			this.checked = this.getAttribute('checked') == 'checked';
		});
	});
	
}(jQuery));
