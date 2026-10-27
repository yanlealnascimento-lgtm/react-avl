import { useState } from 'react';

function Abas({ abas }) {
  const [abaAtiva, setAbaAtiva] = useState(abas[0].id);
  const ativa = abas.find((aba) => aba.id === abaAtiva);

  return (
    <div>
      <div role="tablist">
        {abas.map((aba) => (
          <button key={aba.id} type="button" role="tab" aria-selected={aba.id === abaAtiva} onClick={() => setAbaAtiva(aba.id)}>
            {aba.id === abaAtiva ? `[${aba.titulo}]` : aba.titulo}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        <p>{ativa.conteudo}</p>
      </div>
    </div>
  );
}

export default Abas;
