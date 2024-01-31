import { useState }from 'react';
import { FiSearch } from 'react-icons/fi'

import api from './services/api'

function App() {

  const [input,setInput] = useState('')
  const [cep, setCep] = useState({});
  async function handleSearch(){

    if(input ===''){
      alert("Enter a Cep")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
    }catch{
      alert("Cep not found!")
      setInput("")
    }

  }

  return (
    <div className="conteiner">
      <h1 className="tittle">
       Cep Finder!
      </h1>

      <div  className="conteinerInput">
        <input 
         type="text"
         placeholder="Cep here!"
         value={input}
          onChange={(e) => setInput(e.target.value)}  />

        <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size= {30} color="#ffa500"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 &&(
          <main className='main'>
            <h2>{cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>{cep.complemento}</span>
            <span>{cep.localidade}</span>
            <span>{cep.uf}</span>
          </main>
      )}
      <span className='aboutMe'>
      Developed by   <a href='https://www.linkedin.com/in/brunoss18/'> Bruno Soares</a>  </span>
    </div>
  );
}

export default App;
