import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { HomePage } from "./components/HomePage";

import 'react-toastify/dist/ReactToastify.min.css'


export function App() {
  //? State que vai armazenar meu array de hamburgues
  const [burgers, setBurges] = useState([])
  const [searchResult, setSearchResult] = useState([])

  //? Buscar lanches da API
  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then(resp => resp.json())
      .then(resp => setBurges(resp))
      .catch(error => console.error(error))
  }, [])
  
  return (
    <div>
      <HomePage burgers={burgers} setSearchResult={setSearchResult}/>
      <ToastContainer />
    </div>
  );
}
