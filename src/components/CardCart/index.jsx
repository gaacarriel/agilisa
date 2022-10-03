export function CardCart({ img, name, category, removeFromCart, index }){
    return (
        <li>
            <div>
                <img src={img} alt={name} />
            </div>
            <p>{name}</p>
            <p>{category}</p>
            <button type="button" onClick={() => removeFromCart(index)}>Remover</button>
        </li>
    )
}