import React, { Component } from 'react';
import NomePersonagem from "./pages/CharacterListPage/NomePersonagem";
import DetalhePersonagem from "./pages/CharacterDetailPage/DetalhesPersonagem";
import styled from 'styled-components';
import ScrollToTopPopup from './components/ScrollToTopPopup';
import BackButton from './components/BackButton'; // Importe o componente BackButton

const AppContainer = styled.div`
  position: relative;
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
      <AppContainer>
        <ScrollToTopPopup />
        {this.state.NomeOuDetalhe ? (
          <div>
            <DetalhePersonagem characterName={this.state.characterName} />
            <BackButton onClick={this.BotãoDeVoltar} />
          </div>
        ) : (
          <div>
            <NomePersonagem onCharacterClick={this.ClickPersonagem} />
          </div>
        )}
      </AppContainer>
    );
  }
}

export default App;
