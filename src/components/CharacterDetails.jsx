import React, { Component } from 'react';
import styled from 'styled-components';

const CharacterDetailsContainer = styled.div`
  background-color: #f1e4b8c6 !important;
  max-width: 40%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: 'SenhoDosAneis';
  margin-top: -20px;
  box-shadow: -12px 12px 10px rgb(0 0 0);
  position: relative; /* Adicionado para posicionar a imagem no container */
  overflow: hidden; /* Adicionado para garantir que a imagem não ultrapasse os limites do container */
  background: url('https://qph.cf2.quoracdn.net/main-qimg-ba2e3f117eaa02147edf8270a5266d1c') no-repeat right bottom/20%; /* Adicionado o fundo com a imagem */
`;

const CharacterName = styled.h2`
  font-size: 50px;
  color: #000000;
  font-family: 'Times New Roman', Times, serif;
  align-items: center;
  font-family: 'SenhoDosAneis';
`;

const CharacterInfo = styled.div`
  text-align: left;
  margin-left: 50px;

  p {
    font-size: 18px;
    margin: 10px 0;
    color: #000000;
    font-family: 'SenhoDosAneis';
  }

  strong {
    font-weight: bold;
  }
`;

const CharacterWikiLink = styled.a`
  font-size: 16px;
  color: #c97304;
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
