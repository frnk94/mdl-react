<Tabs ref="tab"
	tabLabels={['Starks','Lannisters','Targaryens',]}
	defaultIndex={1}
	onChange={this.changedTab}>

	<ul>
		<li>Eddard</li>
		<li>Catelyn</li>
		<li>Robb</li>
		<li>Sansa</li>
		<li>Brandon</li>
		<li>Arya</li>
		<li>Rickon</li>
	</ul>

	<ul>
		<li>Tywin</li>
		<li>Cersei</li>
		<li>Jamie</li>
		<li>Tyrion</li>
	</ul>

	<ul>
		<li>Viserys</li>
		<li>Daenerys</li>
	</ul>
</Tabs>

changedTab(index, e) {
	console.log("The tab is changed to", index);
},

nextTab() {
	this.refs.tab.setTabIndex( (this.refs.tab.getTabIndex() + 1) % 3 );
},

previousTab() {
	var index = this.refs.tab.getTabIndex() - 1;
	if( index<0 ) index = 2;
	this.refs.tab.setTabIndex( index % 3 );
},
