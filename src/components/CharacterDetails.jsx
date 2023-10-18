import React, { Component } from 'react';
import styled from 'styled-components';

const CharacterDetailsContainer = styled.div`
  background-color: #f7f7f7c8;
  max-width: 60%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: block;
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
