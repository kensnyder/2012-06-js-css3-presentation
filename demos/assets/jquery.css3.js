(function($) {
	
	"use strict";
	
	function camelize(s) {
		return s.replace(/-([a-z])/g, function($0, $1) {
			return $1.toUpperCase();
		});
	}
	
	function capitalize(s) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
	
	$.fn.css3 = function(prop, value) {
		var capitalizedProp, prefixes, name, i, prefixed;
		
		if (this.length == 0) {
			return this;
		}
		
		if (typeof prop != 'string') {
			for (name in prop) {
				this.css3(name, prop[name]);
			}
			return this;
		}
		
		prop = camelize(prop);
		if (prop in this[0].style) {
			// browser recognizes this property without a prefix
			this.css(prop, value);
		}
		else {
			capitalizedProp = capitalize(prop);
			prefixes = ['MS', 'O', 'Moz', 'Webkit'];
			i = prefixes.length;
			while (i--) {
				prefixed = prefixes[i] + capitalizedProp;
				if (prefixed in this[0].style) {
					// browser recognizes this property with this prefix
					this.css(prefixed, value);
					break;
				}
			}
		}
		return this;
	}
	
}(jQuery));
