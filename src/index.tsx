import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalHeader from './comps/GlobalHeader';

function App() {
	return (
		<div>
			<GlobalHeader />
		</div>
	);
}

const el = document.getElementById('app');
el && ReactDOM.render(<App />, el);
