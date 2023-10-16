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

const CharacterGrid = styled.div`
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px  10px;
`;

const CharacterCard = styled.div`
  flex-basis: calc(33.33% - 20px);
  margin: 0 5px 5px 5px;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
`;

const CharacterName = styled.h2`
  font-size: 20px;
`;

const CharacterInfo = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
`;

const RaceSelect = styled.select`
  font-size: 16px;
  padding: 5px;
`;

class NomePersonagem extends Component {
  state = {
    apiData: null,
    loading: true,
    error: null,
    filterText: '',
    selectedRace: 'All',
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

  handleRaceSelectChange = (event) => {
    this.setState({ selectedRace: event.target.value });
  };

  render() {
    const { apiData, loading, error, filterText, selectedRace } = this.state;

    const filteredCharacters = apiData ? apiData.filter(character =>
      character.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (selectedRace === 'All' || character.race.toLowerCase() === selectedRace.toLowerCase())
    ) : [];

    const uniqueRaces = apiData ? [...new Set(apiData.map(character => character.race))] : [];

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
            <RaceSelect
              value={selectedRace}
              onChange={this.handleRaceSelectChange}
            >
              <option value="All">Todas as Raças</option>
              {uniqueRaces.map((race, index) => (
                <option key={index} value={race}>
                  {race}
                </option>
              ))}
            </RaceSelect>
            <CharacterGrid>
              {filteredCharacters.map((character, index) => (
                <CharacterCard key={index} onClick={() => this.handleCharacterClick(character.name)}>
                  <CharacterName>{character.name}</CharacterName>
                  <CharacterInfo>
                    <p><strong>Raça:</strong> {character.race}</p>
                    <p><strong>Data de Nascimento:</strong> {character.birth}</p>
                    <p><strong>Reino:</strong> {character.realm}</p>
                  </CharacterInfo>
                </CharacterCard>
              ))}
            </CharacterGrid>
          </div>
        )}
      </Container>
    );
  }
}

export default NomePersonagem;