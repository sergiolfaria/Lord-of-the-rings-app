import React, { Component } from 'react';
import NomePersonagem from "./pages/CharacterListPage/NomePersonagem";
import DetalhePersonagem from "./pages/CharacterDetailPage/DetalhesPersonagem";

class App extends Component {
  render() {
    return (
      <div>
        <DetalhePersonagem/>
      </div>
    );
  }
}

export default App;
