import { BsBookmarkPlus } from 'react-icons/bs';
import './Member.css';

const Member = ({ member, handleCart }) => {
	const { name, age, profession, image, demands } = member;

	return (
		<div className='member'>
			<div className='image-container'>
				<img
					className='card-image'
					src={`https://source.unsplash.com/${image}`}
					alt={name}
				/>
			</div>
			<div className='name'>{name}</div>
			<div className='profession'>{profession}</div>
			<div className='bottom-flex'>
				<div className='age'>Age: {age}</div>
				<div className='demands'>Cost: ${demands}</div>
			</div>
			<div className='button-container'>
				<button onClick={() => handleCart(member)} className='btn-card'>
					<BsBookmarkPlus /> Make bookmark
				</button>
			</div>
		</div>
	);
};

export default Member;
