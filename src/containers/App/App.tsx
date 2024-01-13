import { useState } from 'react';
import hamburgerIcon from '../../assets/ingredients/hamburger-icon.jpg';
import shawarmaIcon from '../../assets/ingredients/shawarma-icon.jpg';
import pizzaIcon from '../../assets/ingredients/pizza-icon.jpg';
import colaIcon from '../../assets/ingredients/cola-icon.jpg';
import friesIcon from '../../assets/ingredients/french-fries-icon.jpg';
import chikenIcon from '../../assets/ingredients/chiken-icon.jpeg';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import AddIngredient from '../../components/AddIngredient/AddIngredient';
import './App.css';

interface MenuItem {
	name: string;
	price: number;
	image: string;
}

interface OrderItem {
	name: string;
	sum: number;
	price: number;
}

function App() {
	const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

	const menuItems: MenuItem[] = [
		{ name: 'hamburger', price: 180, image: `${hamburgerIcon}` },
		{ name: 'pizza', price: 480, image: `${pizzaIcon}` },
		{ name: 'chiken legs', price: 599, image: `${chikenIcon}` },
		{ name: 'shawarma', price: 200, image: `${shawarmaIcon}` },
		{ name: 'french fries', price: 149, image: `${friesIcon}` },
		{ name: 'cola', price: 55, image: `${colaIcon}` },
	];

	const handleAddItem = (name: string) => {
		const existingItem = orderItems.find((item) => item.name === name);

		if (existingItem) {
			setOrderItems((prevItems) =>
				prevItems.map((item) =>
					item.name === name ? { ...item, sum: item.sum + 1 } : item
				)
			);
		} else {
			const menuItem = menuItems.find((item) => item.name === name);
			if (menuItem) {
				setOrderItems((prevItems) => [
					...prevItems,
					{ name, sum: 1, price: menuItem.price },
				]);
			}
		}
	};

	const handleRemoveItem = (name: string) => {
		const existingItem = orderItems.find((item) => item.name === name);

		if (existingItem) {
			if (existingItem.sum === 1) {
				setOrderItems((prevItems) =>
					prevItems.filter((item) => item.name !== name)
				);
			} else {
				setOrderItems((prevItems) =>
					prevItems.map((item) =>
						item.name === name ? { ...item, sum: item.sum - 1 } : item
					)
				);
			}
		}
	};

	const total = orderItems.reduce(
		(acc, item) => acc + item.price * item.sum,
		0
	);

	return (
		<div className='app'>
			<OrderDetails orderItems={orderItems} total={total} />
			<AddIngredient
				menuItems={menuItems}
				onAddIng={handleAddItem}
				onRemoveItem={handleRemoveItem}
			/>
		</div>
	);
}

export default App;
