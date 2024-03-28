import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodList from './GoodList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

export default function Shop() {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [basketShow, setBasketShow] = useState(false);
	const [alertName, setAlertName] = useState('');

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop);
				setLoading(false);
			});
	}, []);
	function handleBasketShow() {
		setBasketShow(!basketShow);
	}
	function deleteFromBasket(id) {
		setOrder(order.filter((item) => item.id !== id));
	}
	function changeQuantityGood(id, sign) {
		if (sign === 'dec') {
			setOrder(
				order.map((item) => {
					if (item.id === id) {
						if (item.quantity === 1) return item;
						else return { ...item, quantity: item.quantity - 1 };
					}
					return item;
				})
			);
		} else {
			setOrder(
				order.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					}
					return item;
				})
			);
		}
	}
	function addToBasket(good) {
		setAlertName(good.name);

		let check = false;
		let res = order.map((item) => {
			if (item.id === good.id) {
				check = true;
				return { ...item, quantity: item.quantity + 1 };
			} else return item;
		});
		if (check) {
			setOrder([...res]);
			return;
		}
		let resGood = {
			...good,
			quantity: 1,
		};
		setOrder([...order, resGood]);
	}
	function closeAlert() {
		setAlertName('');
	}
	return (
		<main className="container content">
			<Cart quantity={order.length} handleBasketShow={handleBasketShow} />
			{loading ? (
				<Preloader />
			) : (
				<GoodList goods={goods} addToBasket={addToBasket} />
			)}
			{basketShow && (
				<BasketList
					order={order}
					handleBasketShow={handleBasketShow}
					deleteFromBasket={deleteFromBasket}
					changeQuantityGood={changeQuantityGood}
				/>
            )}
			{alertName && <Alert name={alertName} closeAlert={closeAlert} />}
		</main>
	);
}
