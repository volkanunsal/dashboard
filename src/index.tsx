import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './comps/GlobalHeader';

function App() {
	return (
		<div>
			<Header />
		</div>
	);
}

const el = document.getElementById('app');
el && ReactDOM.render(<App />, el);
