import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Todo from './modules/todo';
import { Provider } from 'react-redux';
import Debug from './debug';

// Check if environment is in development
let tools;

if ( process.env.NODE_ENV === 'development' ) {
	tools = <Debug />;
}

ReactDOM.render(
	<Provider store={ store() } >
		<div>
			<Todo name="Our List"/>
			{ tools }
		</div>
	</Provider>,
	document.getElementById( 'app' )
);
