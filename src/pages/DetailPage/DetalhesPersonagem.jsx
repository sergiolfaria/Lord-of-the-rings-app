import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterDetails from '../../components/CharacterDetails';
import Loading from '../../components/Loading';

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
`;

const Error = styled.div`
  font-size: 20px;
  color: red;
`;

class DetalhesPersonagem extends Component {
  state = {
    apiData: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    const characterName = this.props.characterName;

    if (characterName) {
      axios.get(`https://the-one-api.dev/v2/character?name=${characterName}`, {
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
  }

  render() {
    const { apiData, loading, error } = this.state;

    return (
      <Container>
        {loading && <Loading />}
        {error && <Error>Error: {error}</Error>}
        {apiData && (
          <div>
            {apiData.map((character, index) => (
              <div key={index}>
                <CharacterDetails character={character} />
              </div>
            ))}
          </div>
        )}
      </Container>
    );
  }
}

export default DetalhesPersonagem;
