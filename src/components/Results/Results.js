import React from 'react';

const Results = ({ data }) => (
	<>
		<h2>Searchresults for:</h2>
		<ul>
			{data.items.map(({ id, volumeInfo }) => (
				<li key={`item_${id}`}>
					<h4>
						{volumeInfo.title} {volumeInfo.authors && `- ${volumeInfo.authors}`}
					</h4>
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
