/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Cart } from "../Cart";
import { Header } from "../Header";
import { List } from "../List";

export function HomePage({ burgers }){

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

        const filtred = listCart.find((element) => element.id == id)

        if(filtred){
            setAndToast()
        }
    }
    function setAndToast(){
        toast.error('Você ja adicionou esse item na lista!')
        setListCart([...listCart])
    }

    // Lógica para remover do carrinho
    function removeFromCart(index){
        setListCart((old) => old.filter((_, i) => index !== i ))
    }

    const [count, setCount] = useState(0)
        useEffect(() => {
            const total = listCart.reduce((acc, cur) => {
                return acc + cur.price
            }, 0)
            setCount(total)
        }, [listCart])

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
                    filterSearch={filterSearch}
                    addToCart={addToCart}
                    />
                <Cart 
                    listCart={listCart} 
                    setListCart={setListCart}
                    removeFromCart={removeFromCart}
                    count={count}
                    />
            </main>
        </>
    )
}