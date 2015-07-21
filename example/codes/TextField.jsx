<TextField
	defaultValue='no label text'
	onChange={function(e) { console.log(e.target.value) }}
/><br />
<TextField
	labelText='test label text'
	defaultValue='test default value'
/><br />
<TextField
	labelText='input digits with error text'
	errorText='plz input digits'
	pattern='[0-9]*'
/><br />
<TextField
	labelText='test floating label text'
	errorText='test error text'
	defaultValue='test default value'
	isFloatingLabel={true}
/><br />
<TextField
	labelText='Numeric Textfield with Floating Label'
	errorText='plz input digits'
	defaultValue={this.state.counter}
	isFloatingLabel={true}
	pattern='[0-9]*'
/><br />
<TextField
	labelText='Floating Multiline Textfield'
	defaultValue={'first line\nsecond line'}
	isFloatingLabel={true}
	isMultiline={true}
/>
