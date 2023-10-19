import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex-basis: calc(33.33% - 20px);
  margin: 0 5px 5px 5px;
  border: 1px solid #f1e4b8c6;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  background-color: #f1e4b8c6;
  &:hover {
    transform: scale(1.08);
    background-color: #c7a302cc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: white;
  }
`;

const Name = styled.h2`
  font-size: 20px;
`;

const Info = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

class CharacterCard extends Component {
  render() {
    const { character, onCharacterClick } = this.props;

    return (
      <Card onClick={() => onCharacterClick(character.name)}>
        <Name>{character.name}</Name>
        <Info>
          <p><strong>Raça:</strong> {character.race}</p>
          <p><strong>Reino:</strong> {character.realm || 'Desconhecido ou não possui'}</p>
          <p><strong>Data de Nascimento:</strong> {character.birth}</p>
        </Info>
      </Card>
    );
  }
}

export default CharacterCard;
