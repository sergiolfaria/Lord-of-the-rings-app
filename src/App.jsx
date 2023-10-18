import React, { Component } from 'react';
import styled from 'styled-components';
import Personagens from './pages/ListPage/Personagens';
import DetalhePersonagem from "./pages/DetailPage/DetalhesPersonagem";
import Livros from './pages/ListPage/Livros';
import Filmes from "./pages/ListPage/Filmes";
import ScrollToTopPopup from './components/ScrollToTopPopup';
import BackButton from './components/BackButton';
import Navbar from './components/NavBar';

const AppContainer = styled.div`
  position: relative;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images4.alphacoders.com/172/172304.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding-top: 50px;
  display: block;
`;

class App extends Component {
  state = {
    ListarLivros: false,
    ListarFilmes: false,
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

  MostrarLivros = () => {
    this.setState({
      ListarLivros: true,
      ListarFilmes: false,
      ListarPersonagens: false,
    });
  };

  MostrarFilmes = () => {
    this.setState({
      ListarLivros: false,
      ListarFilmes: true,
      ListarPersonagens: false,
    });
  };

  MostrarPersonagens = () => {
    this.setState({
      ListarLivros: false,
      ListarFilmes: false,
      ListarPersonagens: true,
    });
  };

  render() {
    return (
      <AppContainer>
        <BackgroundImage />
        <Navbar
          onLivrosClick={this.MostrarLivros}
          onFilmesClick={this.MostrarFilmes}
          onPersonagensClick={this.MostrarPersonagens}
        />
        <LogoImage src="https://upload.wikimedia.org/wikipedia/pt/0/0c/The_Lord_of_the_Rings_logo.png" alt="logo" />
        {
          this.state.ListarLivros ? (
            <Livros />
          ) : this.state.ListarFilmes ? (
            <Filmes />
          ) : (
            <div>
              {this.state.PersonagensOuDetalhes ? (
                <div>
                  <DetalhePersonagem characterName={this.state.characterName} />
                  <BackButton onClick={this.BotãoDeVoltar} />
                </div>
              ) : (
                <Personagens onCharacterClick={this.ClickPersonagem} />
              )}
            </div>
          )
        }
        <ScrollToTopPopup />
      </AppContainer >
    );
  }
}

export default App;
