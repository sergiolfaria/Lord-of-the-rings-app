import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
`;

const Loading = styled.div`
  font-size: 10vh;
  color: #333;
`;

const Spinner = styled(FontAwesomeIcon)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Error = styled.div`
  font-size: 20px;
  color: red;
`;

const CharacterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CharacterListItem = styled.li`
  font-size: 18px;
  margin: 10px 0;
`;

class NomePersonagem extends Component {
  state = {
    apiData: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    axios.get('https://the-one-api.dev/v2/character', {
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

  render() {
    const { apiData, loading, error } = this.state;

    return (
      <Container>
        {loading && <Loading><Spinner icon={faSpinner} /> Carregando...</Loading>}
        {error && <Error>Error: {error}</Error>}
        {apiData && (
          <div>
            <h1>Nomes dos Personagens:</h1>
            <CharacterList>
              {apiData.map((character, index) => (
                <CharacterListItem key={index}>{character.name}</CharacterListItem>
              ))}
            </CharacterList>
          </div>
        )}
      </Container>
    );
  }
}

export default NomePersonagem;
