import React, { useContext } from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import Context from '../context/Context';

const LetterCss = styled.div`
  flex: 33%;
  height: 100%;
  border: 1px solid grey;
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  padding: 5px;
  font-family: Arial, Helvetica, sans-serif;
`;

function Letter({ letterPos, attemptVal }) {
  const { board } = useContext(Context);

  const letter = board[attemptVal][letterPos];
  return (
    <LetterCss>{letter}</LetterCss>
  );
}

Letter.propTypes = {
  letterPos: number.isRequired,
  attemptVal: number.isRequired,
};

export default Letter;
