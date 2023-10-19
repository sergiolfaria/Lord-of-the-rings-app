import React, { Component } from 'react';
import styled from 'styled-components';


const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledSearchInput = styled.input`
  font-family: 'SenhoDosAneis';
  width: 20rem;
  padding: 1rem 4rem 1rem 1rem;
  background-color: white;
  border: 0;
  outline: 0;
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:focus {
    outline: none !important;
    
  }
`;

const StyledSelect = styled.select`
  font-family: 'SenhoDosAneis';
  width: 20rem;
  padding: 1rem 3rem 1rem 1rem;
  border: 0;
  outline: 0;
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  appearance: none !important;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="%23000000"><path d="M8 16l8-11H0z"/></svg>'); /* Ícone de chevron para baixo em SVG */
  background-repeat: no-repeat;
  background-position: right 1rem center; /* Posição do ícone no canto direito com espaço à direita de 1rem */
  background-color: #ffffff; /* Cor de fundo branco */
  
  background-size: 12px; /* Define o tamanho do ícone */

  &:focus {
    outline: none;
  }
`;





const ClearFiltersButton = styled.button`
  font-family: 'SenhoDosAneis';
  font-size: 16px;
  padding: 14px 20px;
  background-color: #c7a302cc;
  color: white;
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:#fdad00;
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
        <StyledSearchInput
          type="text"
          placeholder="Filtrar personagens"
          value={filterText}
          onChange={onFilterChange}
        />
        <StyledSelect value={selectedRace} onChange={onRaceSelectChange}>
          <option value="All">Todas as Raças</option>
          {uniqueRaces.map((race, index) => (
            <option key={index} value={race.length > 0 ? race : 'desconhecido'}>
              {race.length > 0 ? race : 'Desconhecido/Não possui'}
            </option>
          ))}
        </StyledSelect>
        <StyledSelect value={selectedRealm} onChange={onRealmSelectChange}>
          <option value="All">Todos os Reinos</option>
          {uniqueRealms.map((realm, index) => (
            <option key={index} value={realm.length > 0 ? realm : 'desconhecido'}>
              {realm.length > 0 ? realm : 'Desconhecido/Não possui'}
            </option>       
          ))}
        </StyledSelect>
        <ClearFiltersButton onClick={onClearFilters}>Limpar Filtros</ClearFiltersButton>
      </FilterContainer>
    );
  }
}

export default FilterFields;
