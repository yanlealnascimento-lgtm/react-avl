import { useState } from 'react';

function Acordeao({ itens }) {
  const [abertoIndice, setAbertoIndice] = useState(null);

  return (
    <div>
      {itens.map((item, indice) => (
        <div key={item.titulo}>
          <button type="button" onClick={() => setAbertoIndice(abertoIndice === indice ? null : indice)}>
            {abertoIndice === indice ? '−' : '+'} {item.titulo}
          </button>
          {abertoIndice === indice && <p>{item.conteudo}</p>}
        </div>
      ))}
    </div>
  );
}

export default Acordeao;
