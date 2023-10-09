import React, { Component } from 'react';
import axios from 'axios';

class NomePersonagem extends Component {
  state = {
    apiData: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    axios.get('https://the-one-api.dev/v2/character', {
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

  render() {
    const { apiData, loading, error } = this.state;

    if (loading) {
      return <div>Carregando...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    
    const characterNames = apiData.map(character => character.name);

    return (
      <div>
        <h1>Nomes dos Personagens:</h1>
        <ul>
          {characterNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NomePersonagem;
