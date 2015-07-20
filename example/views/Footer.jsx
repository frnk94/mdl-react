
"use strict";

var React = require('react');
var MDL = require('../../components');

module.exports = React.createClass({

	getDefaultProps: function() {
		return {
			dropList1: [
				{
					text: 'About',
					href: '#',
				},
				{
					text: 'Terms',
					href: '#',
				},
				{
					text: 'Partners',
					href: '#',
				},
				{
					text: 'Updates',
					href: '#',
				},
			],
			dropList2: [
				{
					text: 'Specs',
					href: '#',
				},
				{
					text: 'Tools',
					href: '#',
				},
				{
					text: 'Resources',
					href: '#',
				},
			],
			dropList3: [
				{
					text: 'How it works',
					href: '#',
				},
				{
					text: 'Patterns',
					href: '#',
				},
				{
					text: 'Usage',
					href: '#',
				},
				{
					text: 'Products',
					href: '#',
				},
				{
					text: 'Contracts',
					href: '#',
				},
			],
			dropList4: [
				{
					text: 'Questions',
					href: '#',
				},
				{
					text: 'Answers',
					href: '#',
				},
				{
					text: 'Contact us',
					href: '#',
				},
			],
			dropList5: [
				{
					text: 'Help',
					href: '#',
				},
				{
					text: 'Privacy & Terms',
					href: '#',
				},
			],
		};
	},

	render: function() {
		return (
			<div>
				<MDL.Footer isMega={true} >
					<MDL.FooterVertical isMega={true} vertical={'top'} >
						<MDL.FooterDropSection title='Features' >
							<MDL.FooterLinkList isMega={true} dropList ={this.props.dropList1} />
						</MDL.FooterDropSection>
						<MDL.FooterDropSection title='Details' >
							<MDL.FooterLinkList isMega={true} dropList ={this.props.dropList2} />
						</MDL.FooterDropSection>
						<MDL.FooterDropSection title='Technology' >
							<MDL.FooterLinkList isMega={true} dropList ={this.props.dropList3} />
						</MDL.FooterDropSection>
						<MDL.FooterDropSection title='FAQ' >
							<MDL.FooterLinkList isMega={true} dropList ={this.props.dropList4} />
						</MDL.FooterDropSection>
					</MDL.FooterVertical>

					<MDL.FooterVertical isMega={true} vertical={'bottom'} >
						<MDL.FooterLogo title='Title' />
						<MDL.FooterLinkList isMega={true} dropList ={this.props.dropList5} />
					</MDL.FooterVertical>
				</MDL.Footer>
				<br />
				<MDL.Footer isMega={false}>
					<MDL.FooterHorizontal isMega={false} horizontal={'left'}>
						<MDL.FooterLogo title='Title' />
						<MDL.FooterLinkList isMega={false} dropList ={this.props.dropList5} />
					</MDL.FooterHorizontal>
				</MDL.Footer>
				<br />
				<MDL.Footer isMega={true}>
					<MDL.FooterVertical isMega={true} vertical={'top'} >
						<MDL.FooterHorizontal isMega={true} horizontal={'left'}>
							<MDL.FooterButton isMega={true} />
							<MDL.FooterButton isMega={true} />
							<MDL.FooterButton isMega={true} />
						</MDL.FooterHorizontal>
						<MDL.FooterHorizontal isMega={true} horizontal={'right'}>
							<MDL.FooterLinkList isMega={true} dropList ={this.props.dropList5} />
						</MDL.FooterHorizontal>
					</MDL.FooterVertical>

					<MDL.FooterVertical isMega={true} vertical={'middle'} >
						<MDL.FooterDropSection title='Learning and Support' >
							<MDL.FooterLinkList isMega={true} dropList ={this.props.dropList2} />
						</MDL.FooterDropSection>
						<MDL.FooterDropSection title='Just for Developers' >
							<MDL.FooterLinkList isMega={true} dropList ={this.props.dropList3} />
						</MDL.FooterDropSection>
					</MDL.FooterVertical>

					<MDL.FooterVertical isMega={true} vertical={'bottom'} >
						<MDL.FooterLogo title='More Information' />
						<MDL.FooterLinkList isMega={true} dropList ={this.props.dropList5} />
					</MDL.FooterVertical>
				</MDL.Footer>
				<br />
				<MDL.Footer isMega={false}>
					<MDL.FooterHorizontal isMega={false} horizontal={'left'}>
						<MDL.FooterLogo title='Mini-footer Heading' />
						<MDL.FooterLinkList isMega={false} dropList ={this.props.dropList5} />
					</MDL.FooterHorizontal>

					<MDL.FooterHorizontal isMega={false} horizontal={'right'}>
						<MDL.FooterButton isMega={false} />
						<MDL.FooterButton isMega={false} />
						<MDL.FooterButton isMega={false} />
					</MDL.FooterHorizontal>
				</MDL.Footer>
			</div>
		);
	},

});
