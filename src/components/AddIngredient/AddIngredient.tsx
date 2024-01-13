import React from 'react';
import './AddIngredient.css';

interface MenuItem {
	name: string;
	price: number;
	image: string;
}

interface AddIngredientProps {
	menuItems: MenuItem[];
	onAddIng: (name: string) => void;
	onRemoveItem: (name: string) => void;
}

const AddIngredient: React.FC<AddIngredientProps> = ({
	menuItems,
	onAddIng,
	onRemoveItem,
}) => {
	return (
		<div className='AddIngredient'>
			<ul className='AddIngredient-list'>
				{menuItems.map((item, index) => (
					<li key={index} className='AddIngredient-list'>
						<div>
							<img
								src={`${item.image}`}
								alt={item.name}
								className='AddIngredient-images'
							/>
						</div>
						<div>
							<p>
								{item.name} - {item.price}
							</p>
							<button
								onClick={() => onAddIng(item.name)}
								className='AddIngredient-Button'
							>
								Add
							</button>
							<button
								onClick={() => onRemoveItem(item.name)}
								className='AddIngredient-Button'
							>
								Remove
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AddIngredient;
