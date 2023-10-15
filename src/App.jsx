import React, { Component } from 'react';
import NomePersonagem from "./pages/CharacterListPage/NomePersonagem";
import DetalhePersonagem from "./pages/CharacterDetailPage/DetalhesPersonagem";

class App extends Component {
  state = {
    NomeOuDetalhe: false,
    characterName: null,
  };

  ClickPersonagem   = (name) => {
    this.setState({
      NomeOuDetalhe: true,
      characterName: name,
    });
  };

  BotãoDeVoltar = () => {
    this.setState({
      NomeOuDetalhe: false,
      characterName: null,
    });
  };
  render() {
    return (
      <div>
        {this.state.NomeOuDetalhe ? (<button onClick={this.BotãoDeVoltar}>Voltar</button> ) : ('')}
        {this.state.NomeOuDetalhe ? (<DetalhePersonagem characterName={this.state.characterName} /> ) : ( <NomePersonagem onCharacterClick={this.ClickPersonagem} /> )}
      </div>
    );
  }
}

export default App;
