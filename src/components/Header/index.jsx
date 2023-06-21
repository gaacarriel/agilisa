import { HeaderStyled } from "./header";

export function Header({ burgers, filterSearch, search, setSearch }) {

    //! Logica para pesquisar
    function searchBurger(value){
        setSearch(value)
    } 

    return (
        <HeaderStyled>
            <div>
                <h2>Burguer</h2>
                <span>Kenzie</span>
            </div>
            <input 
                type="text" 
                name="seach" 
                id="seach" 
                placeholder="Digitar Pesquisa"
                value={search}
                onChange={event => searchBurger(event.target.value)}
            />
        </HeaderStyled>
    )
}