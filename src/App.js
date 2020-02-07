import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Results from './components/Results';
import { API_BASE_URL, START_INDEX } from './constants/api';
import { IS_LOADING, IS_SUCCESS, IS_ERROR } from './constants/searchTypes';

export const Main = styled.main`
	margin: 0 auto;
	max-width: 600px;
`;

const App = () => {
	const [query, setQuery] = useState('Harry Potter');
	const [searchQuery, setSearchQuery] = useState('');
	const [url, setUrl] = useState('');
	const [index, setIndex] = useState(0);

	const dataFetchReducer = (state, action) => {
		switch (action.type) {
			case IS_LOADING:
				return {
					...state,
					isLoading: true,
					isError: false
				};
			case IS_SUCCESS:
				return {
					...state,
					isLoading: false,
					isError: false,
					data: action.payload
				};
			case IS_ERROR:
				return {
					...state,
					isLoading: false,
					isError: true
				};
			default:
				throw new Error();
		}
	};

	const [state, dispatch] = useReducer(dataFetchReducer, {
		isLoading: false,
		isError: false,
		data: null
	});

	useEffect(() => {
		if (url === '') return;

		const getData = async () => {
			dispatch({ type: IS_LOADING });
			try {
				const { data } = await axios.get(url);
				dispatch({ type: IS_SUCCESS, payload: data });
			} catch (error) {
				dispatch({ type: IS_ERROR });
			}
		};

		getData();
	}, [url]);

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
