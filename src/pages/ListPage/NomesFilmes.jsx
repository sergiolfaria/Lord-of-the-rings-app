import React, { Component } from 'react';
import axios from 'axios';

class NomeFilmes extends Component {
  state = {
    apiData: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios.get('https://the-one-api.dev/v2/movie', {
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

  handleLivroClick = (Filme) => {
    this.props.onLivroClick(Filme);
  };

  render() {
    const { apiData, loading, error } = this.state;

    return (
      <div>
        {loading && <p>Carregando...</p>}
        {error && <p>Error: {error}</p>}
        {apiData.length > 0 && (
          <div>
            <h1>Lista de Filmes</h1>
            <ul>
              {apiData.map((Filme, index) => (
                <li key={index} onClick={() => this.handleLivroClick(Filme)}>{Filme.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default NomeFilmes;
