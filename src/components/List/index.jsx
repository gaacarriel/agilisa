import { Card } from "../Card"
import { ListBurgers } from "./list"

export function List({ filterSearch, addToCart }){

    return(
        <>
            <ListBurgers>
                {
                    filterSearch().map((element, index) => {
                        return <Card 
                            addToCart={addToCart}
                            key={index}
                            img={element.img} 
                            name={element.name} 
                            category={element.category}
                            price={element.price}
                            id={element.id}
                        />
                    })
                }
            </ListBurgers>
        </>
    )
}