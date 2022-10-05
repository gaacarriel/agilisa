/* eslint-disable array-callback-return */
import { CardCart } from "../CardCart";
import { NoItems } from "../NoItems";
import { CartBurgers } from "./cart";

export function Cart({ listCart, setListCart, removeFromCart, count }){
    return (
        <CartBurgers>
            <span>Carrinho de compras</span>
            <ul>
                {
                    listCart.length === 0 ? <NoItems/> : 
                        listCart.map((burger, index) => {
                            return <CardCart 
                                key={index}
                                index={index}
                                img={burger.img}
                                name={burger.name}
                                category={burger.category}
                                removeFromCart={removeFromCart}
                            />
                        })
                }
            </ul>
                {
                    listCart.length !== 0 && (
                    <section>
                        <div className="total">
                            <h5>Total</h5>
                            <p>R$ {count}</p>
                        </div>
                        <button 
                            type="button" 
                            onClick={() => setListCart([])}
                        >Limpar carrinho</button>
                    </section>)
                }
        </CartBurgers>
    )
}