
var fork = require('child_process');
var server;

module.exports = {

	'docker' : {
		shouldStartServer : true,
	},

	'headless' : {
		shouldStartServer : true,
		headless : true
	},

	before : function(cb) {
		var self = this;
		if(!this.shouldStartServer) {
			return cb();
		}
		console.log('gulp js:nowatch');
		fork.exec('gulp js:nowatch', function(err) {
			if(err) return cb(err);
			console.log('gulp server');
			server = fork.spawn('gulp', ['server']);
			if(!self.headless) {
				return cb();
			}
			console.log('start Xvfg');
			fork.spawn('Xvfb', ':1 -screen 5 1024x768x8'.split(' '));
			// fork.exec('source e2etest/_source.sh', function(err) {
			// 	if(err) return cb(err);
			// 	return cb();
			// });
			return cb();
		});
	},

	after : function(cb) {
		if(server) server.kill();
		return cb();
	},

};
