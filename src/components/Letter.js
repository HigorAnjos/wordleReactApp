import React, { useContext, useEffect } from 'react';
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
  const {
    board,
    correctWord,
    currAttempt,
    setDisabledLetters,
  } = useContext(Context);

  const letter = board[attemptVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== '' && correctWord.includes(letter);
  const letterState = currAttempt.attempt > attemptVal
    && (correct ? 'correct' : almost ? 'almost' : 'error');

  useEffect(() => {
    if (letter !== '' && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <LetterCss id={ letterState }>{letter}</LetterCss>
  );
}

Letter.propTypes = {
  letterPos: number.isRequired,
  attemptVal: number.isRequired,
};

export default Letter;
