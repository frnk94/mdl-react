
var React = require('react');
var superagent = require('superagent');

/**
	PrismCode
	把 code 變漂亮
	http://prismjs.com/

	!! 需要自行引入 prism.js 和 prism.css

	props
		src, string isRequired, 來源路徑
		lang, string, 語法, 預設值 `javascript`, 參考 http://prismjs.com/#languages-list

*/

module.exports = React.createClass({

	propTypes: {
		src : React.PropTypes.string.isRequired,
		lang : React.PropTypes.string,
		style : React.PropTypes.object,
	},

	getDefaultProps: function() {
		return {
			lang : 'javascript',
		};
	},

	componentDidMount: function() {
		superagent.get(this.props.src)
		.end(function(err, res) {
			if(err) {
				console.error(err);
				throw err;
			}
			console.log(res.body);
		});
	},

	render: function() {
		return (
			<pre style={this.props.style}>
				<code ref='code'
					className={'language-' + this.props.lang} />
			</pre>
		);
	}

});
