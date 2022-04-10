import React from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
`;

function Game() {
  return (
    <Wrapper>
      <Board />
      <Keyboard />
    </Wrapper>
  );
}

export default Game;
