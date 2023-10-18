import React, { Component } from 'react';
import NomePersonagem from "./pages/ListPage/NomePersonagem";
import DetalhePersonagem from "./pages/DetailPage/DetalhesPersonagem";
import NomeLivros from './pages/ListPage/NomesLivros';
import styled from 'styled-components';
import ScrollToTopPopup from './components/ScrollToTopPopup';
import BackButton from './components/BackButton';

const AppContainer = styled.div`
  position: relative;
`;

class App extends Component {
  state = {
    ListarLivros: false,
    ListarPersonagens: true,
    PersonagensOuDetalhes: false,
    characterName: null,
  };

  ClickPersonagem = (name) => {
    this.setState({
      PersonagensOuDetalhes: true,
      characterName: name,
    });
  };

  BotãoDeVoltar = () => {
    this.setState({
      PersonagensOuDetalhes: false,
      characterName: null,
    });
  };

  render() {
    return (
      <AppContainer>
        {this.state.ListarLivros ? (
          <NomeLivros />
        ) : (
          <div>
            {this.state.PersonagensOuDetalhes ? (
              <div>
                <DetalhePersonagem characterName={this.state.characterName} />
                <BackButton onClick={this.BotãoDeVoltar} />
              </div>
            ) : (
              <NomePersonagem onCharacterClick={this.ClickPersonagem} />
            )}
          </div>
        )}
        <ScrollToTopPopup />
      </AppContainer>
    );
  }
}

export default App;
