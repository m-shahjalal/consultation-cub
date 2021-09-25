import List from '../List/List';
import './Total.css';

const Total = ({ cart, clearHandler }) => {
	const total = (data) => {
		let number = 0;
		data.forEach((item) => {
			number = number + item.demands;
		});
		return number;
	};
	return (
		<div className='total'>
			<div className='flex-cart'>
				<p>Total person:</p>
				<p>
					<b>{cart.length}</b>
				</p>
			</div>
			<div className='flex-cart'>
				<p>Total cost:</p>
				<p>
					<b>${total(cart)}</b>
				</p>
			</div>
			{cart.length &&
				cart.map((item) => (
					<List
						item={item}
						key={item.image}
						clearHandler={clearHandler}
					/>
				))}
		</div>
	);
};

export default Total;
