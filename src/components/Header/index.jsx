import { HeaderStyled } from "./header";
import logo from "../../images/logo.png"

export function Header({ search, setSearch }) {
    //! Logica para pesquisar
    function searchBurger(value) {
        setSearch(value);
    }

    return (
        <HeaderStyled>
            <div className="box_logo">
                <img
                    className="logo"
                    src={logo}
                    alt="logo"
                />
                <h1>Agil<span>isa</span></h1>
            </div>
            <input
                type="text"
                name="seach"
                id="seach"
                placeholder="Digitar Pesquisa"
                value={search}
                onChange={(event) => searchBurger(event.target.value)}
            />
        </HeaderStyled>
    );
}
