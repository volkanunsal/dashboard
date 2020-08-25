import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Header from './comps/GlobalHeader';
import {
	Button,
	Combobox,
	Dropdown,
	GlobalHeader,
	GlobalHeaderFavorites,
	GlobalHeaderHelp,
	GlobalHeaderNotifications,
	GlobalHeaderProfile,
	GlobalHeaderSearch,
	GlobalHeaderSetup,
	GlobalHeaderTask,
	IconSettings,
	Popover,
} from '@salesforce/design-system-react';

function App() {
	return (
		<div>
			<Combobox />
			<Dropdown />
			<GlobalHeader />
			<GlobalHeaderFavorites />
			<GlobalHeaderHelp />
			<GlobalHeaderNotifications />
			<GlobalHeaderProfile />
			<GlobalHeaderSearch />
			<GlobalHeaderSetup />
			<GlobalHeaderTask />
			<IconSettings />
			<Popover />
		</div>
	);
}

const el = document.getElementById('app');
el && ReactDOM.render(<App />, el);
