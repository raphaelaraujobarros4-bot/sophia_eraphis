import React from "react";

export default function Eventos() {

  function Alterou(event) {
    console.log("Valor alterado:", event.target.value);
  }

  function Passou() {
    alert("Você passou o mouse sobre o título!");
  }

  function Clicou() {
    alert("Você clicou no botão!");
  }

  function Enviou(event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
  }

  function EntrouInput() {
    console.log("Você entrou no campo!");
  }

  return (
    <div className="contatinho">

      <div className="container">

        <h2 onMouseEnter={Passou}>
          Formulário com Eventos
        </h2>

        <form onSubmit={Enviou}>

          <label>
            Nome:
          </label>

          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={Alterou}
            onFocus={EntrouInput}
          />

          <br /><br />

          <label>
            Email:
          </label>

          <input
            type="email"
            placeholder="Digite seu email"
            onChange={Alterou}
          />

          <br /><br />

          <label>
            Senha:
          </label>

          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={Alterou}
          />

          <br /><br />

          <label>
            Escolha seu curso:
          </label>

          <select onChange={Alterou}>
            <option>Selecione</option>
            <option>Informática</option>
            <option>Administração</option>
            <option>Enfermagem</option>
            <option>Eletrônica</option>
          </select>

          <br /><br />

          <label>
            Idade:
          </label>

          <input
            type="number"
            placeholder="Digite sua idade"
            onChange={Alterou}
          />

          <br /><br />

          <p>Escolha seu período:</p>

          <label>
            <input
              type="radio"
              name="periodo"
              value="Manhã"
              onChange={Alterou}
            />
            Manhã
          </label>

          <label>
            <input
              type="radio"
              name="periodo"
              value="Tarde"
              onChange={Alterou}
            />
            Tarde
          </label>

          <label>
            <input
              type="radio"
              name="periodo"
              value="Noite"
              onChange={Alterou}
            />
            Noite
          </label>

          <br /><br />

          <label>
            <input
              type="checkbox"
              onChange={Alterou}
            />
            Aceito os termos
          </label>

          <br /><br />

          <button type="button" onClick={Clicou}>
            Clique aqui
          </button>

          <button type="submit">
            Enviar formulário
          </button>

        </form>

      </div>

    </div>
  );
}