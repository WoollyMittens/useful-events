/*
	Source:
	van Creij, Maurice (2018). "events.js: Event library.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var events = {

	trigger: function(element, type) {
		if (element.fireEvent) {
			element.fireEvent('on' + type);
		} else {
			var evObj = document.createEvent('Events');
			evObj.initEvent(type, true, false);
			element.dispatchEvent(evObj);
		}
	}

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = events;
}
