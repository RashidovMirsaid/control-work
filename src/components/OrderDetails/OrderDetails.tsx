import React from 'react';
import TotalPrice from '../TotalPrice/TotalPrice';
import './OrderDetails.css';

interface OrderDetailsProps {
	orderItems: { name: string; sum: number; price: number }[];
	total: number;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderItems, total }) => {
	return (
		<div className='OrderDetails'>
			{orderItems.length === 0 ? (
				<p>корзина пуста добавьте что нибудь</p>
			) : (
				<>
					<ul>
						{orderItems.map((item, index) => (
							<li key={index}>
								{item.sum}x {item.name} {item.price} сом
							</li>
						))}
					</ul>
					<TotalPrice total={total} />
				</>
			)}
		</div>
	);
};

export default OrderDetails;
