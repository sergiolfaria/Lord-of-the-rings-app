import React, { Component } from 'react';
import styled from 'styled-components';

const CharacterDetailsContainer = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;
class CharacterDetails extends Component {
  render() {
    const { character } = this.props;

    return (
      <CharacterDetailsContainer>
        <h2>{character.name}</h2>
        <p><strong>Raça:</strong> {character.race}</p>
        <p><strong>Gênero:</strong> {character.gender}</p>
        <p><strong>Data de Nascimento:</strong> {character.birth}</p>
        <p><strong>Data de Morte:</strong> {character.death || 'Desconhecido'}</p>
        <p><strong>Reino:</strong> {character.realm || 'Desconhecido ou não possui'}</p>
        <p>
          <strong>WikiUrl:</strong>{' '}
          <a href={character.wikiUrl} target="_blank" rel="noopener noreferrer">
            {character.wikiUrl || 'Não Possui'}
          </a>
        </p>
      </CharacterDetailsContainer>
    );
  }
}

export default CharacterDetails;
