var util = require( 'util' );
exports.assertion = function( selector, width, height, msg ) {

	var MSG_ELEMENT_NOT_FOUND = 'Testing if the size %s is not within %s * %s.';

	this.message = msg || util.format('Testing if the size <%s> is not within %s * %s.',selector ,width, height );

	this.expected = 'the element size larger than ' + width + ' * ' + height;

	this.pass = function( value ) {
		return value.width >= width && value.height >= height;
	};

	this.failure = function( result ) {
		var failed = result === false || result && result.status === -1;
		if ( failed ) {
			this.message = msg || util.format( MSG_ELEMENT_NOT_FOUND, selector, width, height );
		}
		return failed;
	};

	this.value = function( result ) {
		return result.value;
	};

	this.command = function( cb ) {
		return this.api.getElementSize(selector, cb);
	};

};
