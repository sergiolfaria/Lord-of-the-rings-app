import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #333;
  color: white;
`;

const NavbarButton = styled.button`
  margin: 0;
  padding: 2vh 20px;
  background: none;
  border: none;
  border-left: 1px solid black;
  border-right: 1px solid black;
  color: ${(props) => (props.selected ? 'black' : 'white')};
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#fdad00' : 'transparent')};

  &:hover {
    background-color: #fdad00;
  }
`;

const RightContent = styled.div`
  display: flex;
  margin-right: 1%;
`;

const Navbar = (props) => {
  const [selectedOption, setSelectedOption] = React.useState('personagens'); // Opção padrão selecionada

  const { onLivrosClick, onFilmesClick, onPersonagensClick } = props;

  return (
    <NavbarContainer>
      <RightContent>
        <NavbarButton
          onClick={() => {
            setSelectedOption('livros');
            onLivrosClick();
          }}
          selected={selectedOption === 'livros'}
        >
          Mostrar Livros
        </NavbarButton>
        <NavbarButton
          onClick={() => {
            setSelectedOption('filmes');
            onFilmesClick();
          }}
          selected={selectedOption === 'filmes'}
        >
          Mostrar Filmes
        </NavbarButton>
        <NavbarButton
          onClick={() => {
            setSelectedOption('personagens');
            onPersonagensClick();
          }}
          selected={selectedOption === 'personagens'}
        >
          Mostrar Personagens
        </NavbarButton>
      </RightContent>
    </NavbarContainer>
  );
};

export default Navbar;
