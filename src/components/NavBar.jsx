import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  color: white;
`;

const NavbarButton = styled.button`
  font-family: 'SenhoDosAneis';
  margin: 0;
  padding: 2vh 20px;
  background: none;
  border: none;
  color: ${(props) => (props.selected ? 'white' : 'white')};
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#fdad0076' : 'transparent')};
  border-bottom: 2px solid white;
  border-width: ${(props) => (props.selected ? '2px' : '1px')} ;
  border-radius: 2px;
  margin-right: 10px;

  &:hover {
    background-color: #fdad00;
    border-width: 2px;
  }
`;

const RightContent = styled.div`
  display: flex;
  margin-right: 1%;
`;

const Navbar = (props) => {
  const [selectedOption, setSelectedOption] = React.useState('personagens');

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
