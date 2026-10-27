import { useEffect, useRef, useState } from 'react';

function MenuSuspenso({ opcoes, aoSelecionar }) {
  const [aberto, setAberto] = useState(false);
  const [selecionada, setSelecionada] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function aoClicarFora(evento) {
      if (ref.current && !ref.current.contains(evento.target)) setAberto(false);
    }
    document.addEventListener('mousedown', aoClicarFora);
    return () => document.removeEventListener('mousedown', aoClicarFora);
  }, []);

  function selecionar(opcao) {
    setSelecionada(opcao);
    aoSelecionar(opcao);
    setAberto(false);
  }

  return (
    <div ref={ref}>
      <button type="button" onClick={() => setAberto(!aberto)} aria-haspopup="menu" aria-expanded={aberto}>
        {selecionada ? selecionada.label : 'Selecionar documento'} ▾
      </button>
      {aberto && (
        <ul role="menu">
          {opcoes.map((opcao) => (
            <li key={opcao.valor}>
              <button type="button" role="menuitem" onClick={() => selecionar(opcao)}>
                {opcao.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuSuspenso;
