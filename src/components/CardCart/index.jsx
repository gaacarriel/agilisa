import { CardCartSyled } from "./cardCart";

export function CardCart({ img, name, category, removeFromCart, index, counter }){
    return (
        <CardCartSyled>
            <div>
                <img src={img} alt={name} />
            </div>
            <div className="info">
                <p>{name}</p>
                <p className="category">{category}</p>
            </div>
            <button type="button" onClick={() => removeFromCart(index)}>Remover</button>
        </CardCartSyled>
    )
}