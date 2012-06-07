/**
 * simplified jQuery plugin to set a css3 property by name
 */
(function($) {
	
	"use strict";
	
	// Used to convert dashed css properties to camelCase
	// e.g. `transform-origin` becomes `transformOrigin`
	function camelize(s) {
		return s.replace(/-([a-z])/g, function($0, $1) {
			return $1.toUpperCase();
		});
	}
	
	// Used to capitalize camelCase properties
	//   so we can prepend a browser prefix (e.g. Webkit)
	function capitalize(s) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
	
	$.fn.css3 = function(prop, value) {
		var capitalizedProp, prefixes, i, prefixed;
		
		// TODO: here you would just want to return this
		//   if this.length == 0
		// TODO: here you would want to return the property value 
		//   if arguments.length == 1
		// TODO: here you would want to accept an object
		//   with property-value pairs
				
		// JavaScript's HTMLElement#style object uses camel case
		//   instead of CSS's dashes
		//   so `transform-origin` needs to be `transformOrigin`
		prop = camelize(prop);
		
		// Test if this css property is "in" HTMLElement#style
		// We can test any element, even a dynamically created div
		// TODO: here you would want to cache this testing
		if (prop in this[0].style) {
			// Browser recognizes this property without a prefix
			// Value might be undefined, but it is "in" style
			return this.css(prop, value);
		}
		// Check all the browser prefixes
		capitalizedProp = capitalize(prop);
		prefixes = ['Webkit', 'Moz', 'O', 'MS'];
		for (i = 0; i < prefixes.length; i++) {
			// Capitalize and add prefix so
			// e.g. `transformOrigin` becomes `MozTransformOrigin`
			prefixed = prefixes[i] + capitalizedProp;
			if (prefixed in this[0].style) {
				// Browser recognizes this property 
				//   with this prefix
				return this.css(prefixed, value);
			}
		}
		// Browser doesn't support this property at all
		return this;
	}
	
}(jQuery));
