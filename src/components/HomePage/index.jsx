import { useState } from "react";
import { Cart } from "../Cart";
import { Header } from "../Header";
import { List } from "../List";

export function HomePage({ burgers, setSearchResult }){

    // Lógica para pesquisar
    const [search, setSearch] = useState('')
    function filterSearch(){
        const lowerSearch = search.toLowerCase()

        return burgers.filter(burger =>
            burger.name.toLowerCase().includes(lowerSearch) 
            || 
            burger.category.toLowerCase().includes(lowerSearch))
    }

    // Lógica para adicionar ao carrinho
    const [listCart, setListCart] = useState([])
    function addToCart(id){
        const burgerBuyeded = burgers.filter((burger) =>  burger.id == id)
        setListCart([...listCart, burgerBuyeded[0]])
    }

    // Lógica para remover do carrinho
    function removeFromCart(index){
        setListCart((old) => old.filter((_, i) => index !== i ))
    }

    return (
        <>
            <Header 
                burgers={burgers} 
                filterSearch={filterSearch}
                search={search} 
                setSearch={setSearch}
            />
            <main>
                <List 
                    burgers={burgers} 
                    filterSearch={filterSearch}
                    addToCart={addToCart}
                    />
                <Cart 
                    listCart={listCart} 
                    setListCart={setListCart}
                    removeFromCart={removeFromCart}
                    />
            </main>
        </>
    )
}