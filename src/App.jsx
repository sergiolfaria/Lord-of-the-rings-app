import React, { Component } from 'react';
import NomePersonagem from "./pages/ListPage/NomePersonagem";
import DetalhePersonagem from "./pages/DetailPage/DetalhesPersonagem";
import NomeLivros from './pages/ListPage/NomesLivros';
import styled from 'styled-components';
import ScrollToTopPopup from './components/ScrollToTopPopup';
import BackButton from './components/BackButton';
import NomeFilmes from "./pages/ListPage/NomesFilmes";

const AppContainer = styled.div`
  position: relative;
`;
const Nav = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #333;
  color: white;
`;
const BtnNav = styled.button`
    margin: 0;
    padding: 2vh 20px; 
    background: none;
    border: none; 
    border-left: 1px solid black; 
    border-right: 1px solid black; 
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #b9b922; 
    }
`;

const RightContent = styled.div`
  display: flex;
  margin-right:1%;
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
        <Nav>
          <RightContent>
            <BtnNav onClick={this.MostrarLivros}>Mostrar Livros</BtnNav>
            <BtnNav onClick={this.MostrarFilmes}>Mostrar Filmes</BtnNav>
            <BtnNav onClick={this.MostrarPersonagens}>Mostrar Personagens</BtnNav>
          </RightContent>
        </Nav>
        {
          this.state.ListarLivros ? (
            <NomeLivros />
          ) : this.state.ListarFilmes ? (
            <NomeFilmes />
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
          )
        }
        <ScrollToTopPopup />
      </AppContainer >
    );
  }
}

export default App;
