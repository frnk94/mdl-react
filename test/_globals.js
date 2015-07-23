
var fork = require('child_process');
var server;

module.exports = {

	'docker' : {
		shouldStartServer : true,
	},

	before : function(cb) {
		if(!this.shouldStartServer) {
			return cb();
		}
		console.log('gulp js:nowatch');
		fork.exec('gulp js:nowatch', function(err) {
			if(err) return cb(err);
			console.log('gulp server');
			server = fork.spawn('gulp', ['server']);
			return cb();
		});
	},

	after : function(cb) {
		if(server) server.kill();
		return cb();
	},

};
