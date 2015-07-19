// Footer.jsx

/**
	Layout
		http://www.getmdl.io/components/index.html#layout-section/footer

	props
		isMega, 			boolen				isMega ? 'mega' : 'mini'
		megaVertical,		string				top, bottom, middle
		megaHorizontal,		string				left, right
		miniHorizontal,		string				left, right
		isSocialBtn,		boolen				isSocialBtn ? 'social-btn' : ''
		isLogo,				boolen				isLogo ? 'this.props.isLogo' : ''
*/

var React = require('react');

module.exports = React.createClass({

	propTypes: {
		isMega: React.PropTypes.bool,
		megaVertical: React.PropTypes.string,
		megaHorizontal: React.PropTypes.string,
		miniHorizontal: React.PropTypes.string,
		isSocialBtn: React.PropTypes.bool,
		isLogo: React.PropTypes.bool,
		linkListItem : React.PropTypes.arrayOf(React.PropTypes.shape({
			text : React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element,
			]).isRequired,
			href : React.PropTypes.string,
			onClick : React.PropTypes.func,
			onTouchTap : React.PropTypes.func,
			style : React.PropTypes.object,
		})),
		// isMegaSocialBtn: React.PropTypes.bool,
		// isMinSocialBtn: React.PropTypes.bool,
		// mdl-mega-footer__link-list
		// mdl-mini-footer__link-list
	},

	getDefaultProps: function() {
		return {
			isMega: false,
			megaVertical: 'middle',
			megaHorizontal: 'left',
			miniHorizontal: 'left',
			isSocialBtn: false,
			isLogo: false,
			linkListItem: [],
		};
	},

	render: function() {

		var megaOrMini = this.props.isMega ? 'mega' : 'mini';

		if(this.props.miniHorizontal === 'left') {
			this.props.miniHorizontal = '__left-section';
		}else if(this.props.miniHorizontal === 'right') {
			this.props.miniHorizontal = '__right-section';
		}

		var linkList = [];
		var dropDownSection = [];

		var linkListItem = this.props.linkListItem.map(function(element, index) {
				console.log('linklistitem');
				return (
					<li>
						<a
							href={element.href}
						>
							{element.text}
						</a>
					</li>
				);
			});

		linkList = (
			<ul className={"mdl-"+megaOrMini+"-footer__link-list"} >
				{linkListItem}
			</ul>
		);

		return (
			<div>
				<footer className={"mdl-" + megaOrMini + "-footer"} >
					<div className={"mdl-" + megaOrMini + "-footer" + this.props.miniHorizontal}>
						<h6>Render</h6>
						{dropDownSection}
						{linkList}
					</div>
				</footer>
			</div>
		);
	}

});
