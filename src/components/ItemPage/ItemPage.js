import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGoogleBooksApi from '../../hooks/useGoogleBooksApi';
import { API_BASE_URL } from '../../constants/api';

const ItemPage = () => {
	const [state, setUrl] = useGoogleBooksApi();
	const { id } = useParams();

	const cleanId = id && id.slice(3);

	useEffect(() => {
		setUrl(`${API_BASE_URL}/${cleanId}`);
	}, [cleanId, setUrl]);

	const { isLoading, isError, data } = state;

	return (
		<section data-testid='itemPage'>
			{isError && <p>Oh oh! Something went wrong. Please try again!</p>}

			{isLoading ? (
				<p>Loading...</p>
			) : (
				data && (
					<>
						<h1>ItemPage with id: {cleanId}</h1>
						<h3>{data.volumeInfo.title}</h3>
					</>
				)
			)}
		</section>
	);
};

export default ItemPage;
