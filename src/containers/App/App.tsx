import { useState } from "react";
import coffeIcon from "../../assets/ingredients/ic-coffee.jpg";
import curasanIcon from "../../assets/ingredients/curasan.png";
import macarans from "../../assets/ingredients/macarons-icon.png";
import colaIcon from "../../assets/ingredients/cola-icon.jpg";
import breadIcon from "../../assets/ingredients/bread.png";
import ramenIcon from "../../assets/ingredients/ramen.jpg";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import AddIngredient from "../../components/AddIngredient/AddIngredient";
import "./App.css";

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
    { name: "coffee latte", price: 180, image: `${coffeIcon}` },
    { name: "ramen", price: 480, image: `${ramenIcon}` },
    { name: "macarons", price: 599, image: `${macarans}` },
    { name: "curasan", price: 200, image: `${curasanIcon}` },
    { name: "bread", price: 149, image: `${breadIcon}` },
    { name: "cola", price: 55, image: `${colaIcon}` },
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
    <div className="app">
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
