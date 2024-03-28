import GoodsItem from "./GoodsItem";

export default function GoodList({ goods = [], addToBasket = Function.prototype }) {
    // console.log(goods)

    return (
        <>
            {goods.length ? <div className="row">{goods.map(item => <GoodsItem key={item.offerId + item.mainId} {...item} addToBasket={addToBasket} />)}</div> : <h3>Nothing here</h3>}
            
        </>
    )
}