import { useEffect, useState } from 'react';
import Member from '../Member/Member';
import Total from '../Total/Total';
import './Panel.css';

const Panel = () => {
	const [data, setData] = useState([]);
	const [cart, setCart] = useState([]);

	const handleCart = (item) => {
		const exists = cart.find((i) => i.image === item.image);
		if (!exists) {
			setCart([...cart, item]);
		}
	};
	const clearHandler = (id) => {
		const data = cart.filter((item) => item.image !== id);
		setCart(data);
	};
	useEffect(() => {
		fetch('/data.json')
			.then((res) => res.json())
			.then((d) => setData(d))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='panel'>
			<div className='panel-body'>
				<div className='panel-member'>
					{data.length &&
						data.map((member) => (
							<Member
								member={member}
								handleCart={handleCart}
								key={member.image}
							/>
						))}
				</div>
				<div className='cart'>
					<Total cart={cart} clearHandler={clearHandler} />
				</div>
			</div>
		</div>
	);
};

export default Panel;
