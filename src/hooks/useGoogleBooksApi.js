import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import dataFetchReducer from '../reducer/dataFetchReducer';
import { IS_LOADING, IS_SUCCESS, IS_ERROR } from '../constants/searchTypes';

const useGoogleBooksAPI = () => {
	const [url, setUrl] = useState('');

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

	return [state, setUrl, url];
};

export default useGoogleBooksAPI;
