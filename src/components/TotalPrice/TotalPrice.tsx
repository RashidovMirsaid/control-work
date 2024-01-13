import React from 'react';

interface TotalPriceProps {
	total: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ total }) => {
	return (
		<div className='TotalPrice'>
			<p>Общая сумма {total}</p>
		</div>
	);
};

export default TotalPrice;
