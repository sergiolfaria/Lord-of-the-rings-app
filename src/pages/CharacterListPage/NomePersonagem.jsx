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
  cursor: pointer;
`;

const SearchInput = styled.input`
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
`;

class NomePersonagem extends Component {
  state = {
    apiData: null,
    loading: true,
    error: null,
    filterText: '',
  };

  handleCharacterClick = (name) => {
    this.props.onCharacterClick(name);
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

  handleFilterChange = (event) => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const { apiData, loading, error, filterText } = this.state;

    const filteredCharacters = apiData ? apiData.filter(character =>
      character.name.toLowerCase().includes(filterText.toLowerCase())
    ) : [];

    return (
      <Container>
        {loading && <Loading><Spinner icon={faSpinner} /> Carregando...</Loading>}
        {error && <Error>Error: {error}</Error>}
        {apiData && (
          <div>
            <h1>Nomes dos Personagens:</h1>
            <SearchInput
              type="text"
              placeholder="Filtrar personagens"
              value={filterText}
              onChange={this.handleFilterChange}
            />
            <CharacterList>
              {filteredCharacters.map((character, index) => (
                <CharacterListItem key={index} onClick={() => this.handleCharacterClick(character.name)}>
                  {character.name}
                </CharacterListItem>
              ))}
            </CharacterList>
          </div>
        )}
      </Container>
    );
  }
}

export default NomePersonagem;
