import React, { useState } from 'react';
import styled from 'styled-components';

import Results from '../Results';
import useGoogleBooksAPI from '../../hooks/useGoogleBooksApi';
import { API_BASE_URL, START_INDEX } from '../../constants/api';

export const Main = styled.main`
	margin: 0 auto;
	max-width: 600px;
`;

const App = () => {
	const [query, setQuery] = useState('Harry Potter');
	const [searchQuery, setSearchQuery] = useState('');
	const [index, setIndex] = useState(0);
	const [state, setUrl] = useGoogleBooksAPI();

	const handleOnclick = () => {
		setIndex(index + 10);
		setUrl(`${API_BASE_URL}${query}&${START_INDEX}=${index}`);
	};

	const { isLoading, isError, data } = state;

	return (
		<Main>
			<h1>myreadingtime.digital</h1>
			<p>Search for a book:</p>
			<form
				onSubmit={event => {
					setUrl(`${API_BASE_URL}${query}&${START_INDEX}=${index}`);
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
				data && (
					<>
						<Results data={data} searchQuery={searchQuery} />
						<button onClick={handleOnclick}>Load more books</button>
					</>
				)
			)}
		</Main>
	);
};

export default App;
