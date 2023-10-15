import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
`;

const Loading = styled.div`
  font-size: 20px;
  color: #333;
`;

const Error = styled.div`
  font-size: 20px;
  color: red;
`;

const CharacterDetails = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

class DetalhePersonagem extends Component {
  state = {
    apiData: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    const characterName = this.props.characterName;

    if (characterName) {
      axios.get(`https://the-one-api.dev/v2/character?name=${characterName}`, {
        headers: {
          Authorization: `Bearer qSslRdCPhKmZlupbd0vf`
        }
      })
      .then(response => {
        this.setState({ apiData: response.data.docs, loading: false, error: null });
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        this.setState({ loading: false, error: 'Erro ao carregar dados.' });
      });
    }
  }

  render() {
    const { apiData, loading, error } = this.state;

    return (
      <Container>
        {loading && <Loading>Carregando...</Loading>}
        {error && <Error>Error: {error}</Error>}
        {apiData && (
          <div>
            <h1>Detalhes dos Personagens:</h1>
            {apiData.map((character, index) => (
              <div key={index}>
                <h2>{character.name}</h2>
                <CharacterDetails>
                  <p><strong>Raça:</strong> {character.race}</p>
                  <p><strong>Data de Nascimento:</strong> {character.birth}</p>
                  <p><strong>Data de Morte:</strong> {character.death || 'Desconhecido'}</p>
                </CharacterDetails>
              </div>
            ))}
          </div>
        )}
      </Container>
    );
  }
}

export default DetalhePersonagem;
