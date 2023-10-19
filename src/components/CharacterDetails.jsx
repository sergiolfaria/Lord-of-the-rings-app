import React, { Component } from 'react';
import styled from 'styled-components';

const CharacterDetailsContainer = styled.div`
  background-color: #f7f7f7e1;
  max-width: 60%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: -20px;
`;

const CharacterName = styled.h2`
  font-size: 50px;
  color: #333;
  font-family: 'Times New Roman', Times, serif;
  align-items: center;
`;

const CharacterInfo = styled.div`
  text-align: left;
  margin-left: 50px;

  p {
    font-size: 18px;
    margin: 10px 0;
    color: #555;
  }

  strong {
    font-weight: bold;
  }
`;

const CharacterWikiLink = styled.a`
  font-size: 16px;
  color: #0077b6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

class CharacterDetails extends Component {
  render() {
    const { character } = this.props;

    return (
      <CharacterDetailsContainer>
        <CharacterName>{character.name}</CharacterName>
        <CharacterInfo>
          <p><strong>Raça:</strong> {character.race}</p>
          <p><strong>Gênero:</strong> {character.gender}</p>
          <p><strong>Data de Nascimento:</strong> {character.birth}</p>
          <p><strong>Data de Morte:</strong> {character.death || 'Desconhecido'}</p>
          <p><strong>Reino:</strong> {character.realm || 'Desconhecido ou não possui'}</p>
          <p>
            <strong>WikiUrl:</strong>{' '}
            <CharacterWikiLink href={character.wikiUrl} target="_blank" rel="noopener noreferrer">
              {character.wikiUrl || 'Não Possui'}
            </CharacterWikiLink>
          </p>
        </CharacterInfo>
      </CharacterDetailsContainer>
    );
  }
}

export default CharacterDetails;
