import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCEP] = useState('');

  async function handleSearch() {
    //22080050/json/
    if (input === '') {
      alert('Preencha algum cep');
      return;
    }
    try {
      const response = await api.get(`${input}/json/`);
      setCEP(response.data);
      setInput('');
    } catch {
      alert('ops! Erro ao buscar aqui');
      setInput('');
    }
    //alert('Valor do Input' + input);
  }
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP:{cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
