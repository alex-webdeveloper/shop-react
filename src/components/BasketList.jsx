import BasketItem from "./BasketItem";

export default function BasketList({ order = [], handleBasketShow = Function.prototype, deleteFromBasket = Function.prototype, changeQuantityGood = Function.prototype }) {
    let totalPrice = order.reduce((accum, item) => accum + item.price * item.quantity, 0);

    return (
        <>
            <ul className="list-group mt-3 basket-list">
                <button onClick={() => handleBasketShow()} type="button" className="btn-close align-self-end fs-5"></button>
                <li className="list-group-item active" aria-current="true">Корзина</li>
                {order.length ? order.map((item, i) => (
                    <BasketItem key={item.id || i} {...item} deleteFromBasket={deleteFromBasket} changeQuantityGood={changeQuantityGood} />
                )) : <li className="list-group-item">Корзина пуста</li>
                }
                <li className="list-group-item active d-flex justify-content-between" aria-current="true">
                    <span>Общая стоимость: {totalPrice}$</span>
                    <button type="button" className="btn btn-success" aria-current="true">
                        Оформить
                    </button>
                </li>
            </ul>
        </>
    )
}