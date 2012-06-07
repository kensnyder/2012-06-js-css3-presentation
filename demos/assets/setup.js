(function($) {
	
	"use strict";
	
	$(function() {
		// Firefox will remember checked radios on refresh
		// Make sure that the radios marked checked="checked"
		//   are always checked
		$('input[type=radio]').each(function() {
			this.checked = this.getAttribute('checked') == 'checked';
		});
		
		// make our select into a navigation bar
		$('#nav select').change(function() {
			window.location.href = this.options[this.selectedIndex].value;
		});
	});
	
}(jQuery));
