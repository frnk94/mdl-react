
var React = require('react');
var superagent = require('superagent');
var _ = require('lodash');

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
			style : {},
		};
	},

	componentDidMount: function() {
		var self = this;
		superagent.get(this.props.src)
		.end(function(err, res) {
			if(err) {
				return console.error(err);
			}
			var node = React.findDOMNode(self.refs.code);
			node.innerText = res.text;
			Prism.highlightAll();
		});
	},

	componentWillUpdate: function(nextProps) {
		if(this.props.src === nextProps.src) return;
		superagent.get(nextProps.src)
		.end(function(err, res) {
			if(err) {
				return console.error(err);
			}
			var node = React.findDOMNode(this.refs.code);
			node.innerText = res.text;
			Prism.highlightAll();
		}.bind(this));
	},


	render: function() {
		var style = _.extend({
			margin : '0',
		}, this.props.style);
		return (
			<pre style={style}>
				<code ref='code'
					className={'language-' + this.props.lang}
				/>
			</pre>
		);
	}

});
