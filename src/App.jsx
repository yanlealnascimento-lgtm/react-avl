import { useState } from 'react';
import Abas from './components/Abas.jsx';
import Acordeao from './components/Acordeao.jsx';
import MenuSuspenso from './components/MenuSuspenso.jsx';
import { convenios } from './data/convenios.js';
import { documentos } from './data/documentos.js';
import { duvidas } from './data/duvidas.js';

function App() {
  const [documento, setDocumento] = useState(null);

  return (
    <div>
      <h1>SINDADOS</h1>

      <section>
        <h2>Dúvidas</h2>
        <Acordeao itens={duvidas} />
      </section>

      <section>
        <h2>Convênio</h2>
        <Abas abas={convenios} />
      </section>

      <section>
        <h2>Editais</h2>
        <MenuSuspenso opcoes={documentos} aoSelecionar={setDocumento} />
        {documento && <p>{documento.conteudo}</p>}
      </section>
    </div>
  );
}

export default App;
