import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Loading from '../../components/Loading';

const LivrosContainer = styled.div`
  background-color: #f7f7f7c8;
  width: 50%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: block;
  font-family: 'SenhoDosAneis';
`;
const ContainerGeral = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
      
`

const ErrorMessage = styled.p`
  color: #ff0000;
  font-weight: bold;
`;

const LivroList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LivroItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #af8f01ae;
  }
`;

class Livros extends Component {
  state = {
    apiData: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios.get('https://the-one-api.dev/v2/book', {
      headers: {
        Authorization: `Bearer qSslRdCPhKmZlupbd0vf`
      }
    })
      .then(response => {
        this.setState({ apiData: response.data.docs, loading: false, error: null });
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        this.setState({ loading: false, error: 'Erro ao carregar dados.' });
      });
  }

  handleBookClick = (livroName) => {
    alert(`A função para obter detalhes do livro "${livroName}" está em desenvolvimento.`);
  }

  render() {
    const { apiData, loading, error } = this.state;

    return (
      <ContainerGeral>
        {loading && <Loading />}
        {apiData.length > 0 && (
          <LivrosContainer>
            {error && <ErrorMessage>Error: {error}</ErrorMessage>}
            <div>
              <h1>Lista de Livros</h1>
              <LivroList>
                {apiData.map((livro, index) => (
                  <LivroItem
                    key={index}
                    onClick={() => this.handleBookClick(livro.name)}
                  >
                    {livro.name}
                  </LivroItem>
                ))}
              </LivroList>
            </div>
          </LivrosContainer>
        )}
      </ContainerGeral>
    );
  }
}

export default Livros;
