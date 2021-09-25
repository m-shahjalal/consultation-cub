import { CgPlayListRemove } from 'react-icons/cg';
import './List.css';

const List = ({ item, clearHandler }) => {
	const { name, image } = item;

	return (
		<div className='list'>
			<img
				className='list-image'
				src={`https://source.unsplash.com/${image}`}
				alt={name}
			/>
			<p className='list-name'>{name}</p>
			<button onClick={() => clearHandler(image)} className='cross'>
				<CgPlayListRemove size='2rem' color='#43b4f1' />
			</button>
		</div>
	);
};

export default List;
