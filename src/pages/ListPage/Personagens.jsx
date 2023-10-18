import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import FilterFields from '../../components/FilterFields';
import CharacterCard from '../../components/CharacterCard';

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
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


class Personagens extends Component {
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
    axios
      .get('https://the-one-api.dev/v2/character', {
        headers: {
          Authorization: `Bearer qSslRdCPhKmZlupbd0vf`,
        },
      })
      .then((response) => {
        const apiData = response.data.docs.map((character) => ({
          ...character,
          race: character.race || 'Desconhecido ou não possui',
          birth: character.birth || 'Desconhecido ou não possui',
        }));

        this.setState({ apiData, loading: false, error: null });
      })
      .catch((error) => {
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
        {loading && <Loading />}
        {error && <Error>Error: {error}</Error>}
        {apiData && (
          <div>
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

export default Personagens;
