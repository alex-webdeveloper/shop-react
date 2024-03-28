export default function GoodsItem({
	offerId: id,
	displayName: name,
	displayDescription: description,
	price,
	displayAssets: src,
	addToBasket = Function.prototype
}) {
	return (
		<>
			<div className="card col-sm-4">
				<img
					src={src[0]?.full_background}
					className="card-img-top"
					alt={name}
				/>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title text-center">{name}</h5>
					<p className="card-text flex-grow-1">{description}</p>
                    <div className="d-flex justify-content-between">
						<button onClick={() => addToBasket({id, name, description, price: price.finalPrice})} className="btn btn-primary w-50">Buy</button>
						<span>{price.finalPrice}$</span>
					</div>
				</div>
			</div>
		</>
	);
}
