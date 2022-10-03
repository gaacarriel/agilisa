export function Card({ img, name, category, price, id, addToCart }){
    return(
        <li>
            <figure>
                <img src={img} alt={name} />
            </figure>
            <div>
                <h3>{name}</h3>
                <span>{category}</span>
                <p>R$ {price}</p>
                <button 
                    type="button" 
                    id={id}
                    onClick={(event) => addToCart(event.target.id)}
                >Adicionar</button>
            </div>
        </li>
    )
}