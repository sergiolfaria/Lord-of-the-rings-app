import React, { Component } from 'react';
import NomePersonagem from "./pages/CharacterListPage/NomePersonagem";
import DetalhePersonagem from "./pages/CharacterDetailPage/DetalhesPersonagem";

class App extends Component {
  state = {
    NomeOuDetalhe: false,
    characterName: null,
  };

  handleCharacterClick = (name) => {
    this.setState({
      NomeOuDetalhe: true,
      characterName: name,
    });
  };

  render() {
    return (
      <div>
        {this.state.NomeOuDetalhe ? (
          <DetalhePersonagem characterName={this.state.characterName} />
        ) : (
          <NomePersonagem onCharacterClick={this.handleCharacterClick} />
        )}
      </div>
    );
  }
}

export default App;
