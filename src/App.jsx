import React, { Component } from 'react';
import NomePersonagem from "./pages/CharacterListPage/NomePersonagem";
import DetalhePersonagem from "./pages/CharacterDetailPage/DetalhesPersonagem";
import styled from 'styled-components';

const BackButton = styled.button`
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
  cursor: pointer;
`;

class App extends Component {
  state = {
    NomeOuDetalhe: false,
    characterName: null,
  };

  ClickPersonagem = (name) => {
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
        {this.state.NomeOuDetalhe ? <BackButton onClick={this.BotãoDeVoltar}>Voltar</BackButton> : ('')}
        {this.state.NomeOuDetalhe ? (<DetalhePersonagem characterName={this.state.characterName} />) : (<NomePersonagem onCharacterClick={this.ClickPersonagem} />)}
      </div>
    );
  }
}

export default App;
