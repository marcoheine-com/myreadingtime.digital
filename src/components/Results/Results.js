import React from 'react';

const Results = ({ data, searchQuery }) => (
	<>
		<h2>Searchresults {searchQuery && `for: ${searchQuery}`}</h2>
		<ul>
			{data.items.map(({ id, volumeInfo }) => (
				<li key={`item_${id}`}>
					<h3>{volumeInfo.title}</h3>
					<h4>{volumeInfo.authors && `${volumeInfo.authors}`}</h4>
					{volumeInfo.imageLinks && (
						<img
							alt={`Thumbnail of ${volumeInfo.title}`}
							src={volumeInfo.imageLinks.smallThumbnail}
						></img>
					)}
				</li>
			))}
		</ul>
	</>
);

export default Results;
