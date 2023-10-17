import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import FilterFields from '../../components/FilterFields';
import CharacterCard from '../../components/CharacterCard';

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
  margin: 40px 10px;
`;

const CharacterName = styled.h2`
  font-size: 20px;
`;

const CharacterInfo = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

class NomePersonagem extends Component {
  state = {
    apiData: null,
    loading: true,
    error: null,
    filterText: '',
    selectedRace: 'All',
    selectedRealm: 'All',
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

  handleRealmSelectChange = (event) => {
    this.setState({ selectedRealm: event.target.value });
  };
  handleClearFilters = () => {
    this.setState({
      filterText: '',
      selectedRace: 'All',
      selectedRealm: 'All',
    });
  };

  render() {
    const { apiData, loading, error, filterText, selectedRace, selectedRealm } = this.state;

    const uniqueRaces = apiData ? [...new Set(apiData.map(character => character.race))] : [];
    const uniqueRealms = apiData ? [...new Set(apiData.map(character => character.realm))] : [];

    const filteredCharacters = apiData ? apiData.filter((character) =>
      character.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (selectedRace === 'All' || character.race.toLowerCase() === selectedRace.toLowerCase()) &&
      (selectedRealm === 'All' || 
        (selectedRealm.toLowerCase() === 'desconhecido' && (!character.realm || character.realm.trim() === '')) ||
        (character.realm && character.realm.toLowerCase() === selectedRealm.toLowerCase())
      )
    ) : [];

    return (
      <Container>
        {loading && <Loading><Spinner icon={faSpinner} /> Carregando...</Loading>}
        {error && <Error>Error: {error}</Error>}
        {apiData && (
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/pt/0/0c/The_Lord_of_the_Rings_logo.png' alt='logo'/>
            <FilterFields
              filterText={filterText}
              selectedRace={selectedRace}
              selectedRealm={selectedRealm}
              uniqueRaces={uniqueRaces}
              uniqueRealms={uniqueRealms}
              onFilterChange={this.handleFilterChange}
              onRaceSelectChange={this.handleRaceSelectChange}
              onRealmSelectChange={this.handleRealmSelectChange}
              onClearFilters={this.handleClearFilters}
            />
            <CharacterGrid>
              {filteredCharacters.map((character, index) => (
                <CharacterCard key={index} character={character} onCharacterClick={this.handleCharacterClick} />
              ))}
            </CharacterGrid>
          </div>
        )}
      </Container>
    );
  }
}

export default NomePersonagem;
