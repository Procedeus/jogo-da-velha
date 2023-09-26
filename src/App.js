import { useState } from "react";
import Form  from "./Components/Form";
import Table from "./Components/Table"; 

function App() {
  const [jogador1, setJogador1] = useState('');
  const [jogador2, setJogador2] = useState('');
  const [desaparecer, setDesaparecer] = useState(false);

  return (
    <div className="container">
      {!desaparecer && <Form jogador1={jogador1} jogador2={jogador2} setDesaparecer={setDesaparecer} setJogador1={setJogador1} setJogador2={setJogador2}/>}
      {desaparecer && <Table jogador1={jogador1} jogador2={jogador2} />}
    </div>
  );
}

export default App;
