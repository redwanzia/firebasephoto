import React from 'react';
import useFirestore from '../hooks/useFireStore';

const ImageGrid = ({ setSelectedImg }) => {
	const { docs } = useFirestore('images');
	console.log(docs);

	return (
		<div className='img-grid'>
			{docs &&
				docs.map((doc) => {
					return (
						<div className='img-wrap' key={docs.id} onClick={() => setSelectedImg(doc.url)}>
							<img src={doc.url} alt='grid' />
						</div>
					);
				})}
		</div>
	);
};

export default ImageGrid;
