import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage';

const App = () => (
	<Router>
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/want-to-read'>Want to read</Link>
				</li>
				<li>
					<Link to='/books-I-red'>Books I red</Link>
				</li>
			</ul>
		</nav>
		<Switch>
			<Route path='/'>
				<SearchPage />
			</Route>
			<Route path='/want-to-read'>
				<SearchPage />
			</Route>
			<Route path='/books-I-red'>
				<SearchPage />
			</Route>
		</Switch>
	</Router>
);

export default App;
