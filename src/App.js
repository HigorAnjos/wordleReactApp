import React from 'react';
import './App.css';
import Game from './pages/Game';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: white;
  margin-bottom: 20px;
  border-bottom: 1px solid white;
`;

function App() {
  return (
    <div className="App">
      <Title>Wordle</Title>
      <Game />
    </div>
  );
}

export default App;
