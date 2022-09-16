import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  const [input, setInput] = useState('');

  function handleSearch() {
    alert('Valor do Input' + input);
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

      <main className="main">
        <h2>CEP: </h2>
        <span>Rua</span>
        <span>Complemento</span>
        <span>Bairro</span>
        <span>Estado</span>
      </main>
    </div>
  );
}

export default App;
