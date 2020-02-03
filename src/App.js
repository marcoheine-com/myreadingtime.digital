import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import Results from './components/Results';
import { API_BASE_URL } from './constants/api';

const App = () => {
	const [data, setData] = useState(null);
	const [query, setQuery] = useState('Harry Potter');
	const [searchQuery, setSearchQuery] = useState('');
	const [url, setUrl] = useState('');

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (url === '') return;

		const getData = async () => {
			setIsLoading(true);
			setIsError(false);

			try {
				const { data } = await axios.get(url);

				setData(data);
			} catch (error) {
				console.error(error);

				setIsError(true);
			}
			setIsLoading(false);
		};

		getData();
	}, [url]);

	return (
		<>
			<h1>myreadingtime.digital</h1>
			<p>Search for a book:</p>
			<form
				onSubmit={event => {
					setUrl(`${API_BASE_URL}${query}`);
					setSearchQuery(query);
					event.preventDefault();
				}}
			>
				<input
					type='text'
					value={query}
					onChange={event => setQuery(event.target.value)}
				/>
				<button type='submit' disabled={query === ''}>
					Search
				</button>
			</form>

			{isError && <p>Oh oh! Something went wrong. Please try again!</p>}

			{isLoading ? (
				<p>Loading...</p>
			) : (
				data && <Results data={data} searchQuery={searchQuery} />
			)}
		</>
	);
};

export default App;
