import React from 'react';
import styled from 'styled-components';
import Letter from './Letter';

const Row = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  margin: 20px 5px;
  padding: 0;
`;

const BoardCss = styled.div`
  width: 350px;
  height: 450px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;

`;

function Board() {
  return (
    <BoardCss>
      <Row>
        <Letter letterPos={ 0 } attemptVal={ 0 } />
        <Letter letterPos={ 1 } attemptVal={ 0 } />
        <Letter letterPos={ 2 } attemptVal={ 0 } />
        <Letter letterPos={ 3 } attemptVal={ 0 } />
        <Letter letterPos={ 4 } attemptVal={ 0 } />
      </Row>
      <Row>
        <Letter letterPos={ 0 } attemptVal={ 1 } />
        <Letter letterPos={ 1 } attemptVal={ 1 } />
        <Letter letterPos={ 2 } attemptVal={ 1 } />
        <Letter letterPos={ 3 } attemptVal={ 1 } />
        <Letter letterPos={ 4 } attemptVal={ 1 } />
      </Row>
      <Row>
        <Letter letterPos={ 0 } attemptVal={ 2 } />
        <Letter letterPos={ 1 } attemptVal={ 2 } />
        <Letter letterPos={ 2 } attemptVal={ 2 } />
        <Letter letterPos={ 3 } attemptVal={ 2 } />
        <Letter letterPos={ 4 } attemptVal={ 2 } />
      </Row>
      <Row>
        <Letter letterPos={ 0 } attemptVal={ 3 } />
        <Letter letterPos={ 1 } attemptVal={ 3 } />
        <Letter letterPos={ 2 } attemptVal={ 3 } />
        <Letter letterPos={ 3 } attemptVal={ 3 } />
        <Letter letterPos={ 4 } attemptVal={ 3 } />
      </Row>
      <Row>
        <Letter letterPos={ 0 } attemptVal={ 4 } />
        <Letter letterPos={ 1 } attemptVal={ 4 } />
        <Letter letterPos={ 2 } attemptVal={ 4 } />
        <Letter letterPos={ 3 } attemptVal={ 4 } />
        <Letter letterPos={ 4 } attemptVal={ 4 } />
      </Row>
    </BoardCss>
  );
}

export default Board;
