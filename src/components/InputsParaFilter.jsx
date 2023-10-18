import React, { Component } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const RaceSelect = styled.select`
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
`;

const RealmSelect = styled.select`
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
`;

const ClearFiltersButton = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #fdad00;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ca8a00;
  }
`;

class FilterFields extends Component {
  render() {
    const {
      filterText,
      selectedRace,
      selectedRealm,
      uniqueRaces,
      uniqueRealms,
      onFilterChange,
      onRaceSelectChange,
      onRealmSelectChange,
      onClearFilters,
    } = this.props;

    return (
      <FilterContainer>
        <SearchInput
          type="text"
          placeholder="Filtrar personagens"
          value={filterText}
          onChange={onFilterChange}
        />
        <RaceSelect value={selectedRace} onChange={onRaceSelectChange}>
          <option value="All">Todas as Raças</option>
          {uniqueRaces.map((race, index) => (
            <option key={index} value={race}>
              {race}
            </option>
          ))}
        </RaceSelect>
        <RealmSelect value={selectedRealm} onChange={onRealmSelectChange}>
          <option value="All">Todos os Reinos</option>
          {uniqueRealms.map((realm, index) => (
            <option key={index} value={realm.length > 0 ? realm : 'desconhecido'}>
              {realm.length > 0 ? realm : 'Desconhecido'}
            </option>
          ))}
        </RealmSelect>
        <ClearFiltersButton onClick={onClearFilters}>Limpar Filtros</ClearFiltersButton>
      </FilterContainer>
    );
  }
}

export default FilterFields;
