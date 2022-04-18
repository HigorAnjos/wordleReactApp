import React, { useContext } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import GameOver from '../components/GameOver';
import Keyboard from '../components/Keyboard';
import Context from '../context/Context';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  padding-top: 10px;
  flex-direction: column;
`;

function Game() {
  const { gameOver } = useContext(Context);
  return (
    <Wrapper>
      <Board />
      { gameOver.gameOver ? <GameOver /> : <Keyboard /> }
    </Wrapper>
  );
}

export default Game;
