import { useState } from 'react';
import './index.scss';

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  function mais() {
    if (contagem < 20) {
      setContagem(contagem + 1);
    }
  }

  function menos() {
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  }

  return (
    <div className='contador'>
      <h1>Contador</h1>
      <p>{contagem}</p>
      <button onClick={mais}>+</button>
      <button onClick={menos}>-</button>
    </div>
  );
}





