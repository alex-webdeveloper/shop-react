
export default function BasketItem({ id, name, price, quantity, deleteFromBasket = Function.prototype, changeQuantityGood = Function.prototype }) {
    
    return (
        <>
             <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>{name} <span onClick={() => changeQuantityGood(id, 'dec')} className="p-2 basket-list__quantity">-</span>x{quantity}<span onClick={() => changeQuantityGood(id, 'inc')} className="p-2 basket-list__quantity">+</span> = {price * quantity}$</div>
                <button type="button" className="btn-close" onClick={() => deleteFromBasket(id)}></button>
            </li>
        </>
    )
}