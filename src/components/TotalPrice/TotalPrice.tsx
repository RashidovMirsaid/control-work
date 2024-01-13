import React from 'react';

interface TotalPriceProps {
	total: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ total }) => {
	return (
		<div className='total-price'>
			<p>Общая сумма ${total.toFixed(2)}</p>
		</div>
	);
};

export default TotalPrice;
