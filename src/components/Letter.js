import React, { useContext } from 'react';
import { number } from 'prop-types';
import Provider from '../context/Provider';

function Letter({ letterPos, attemptVal }) {
  const { board } = useContext(Provider);

  const letter = board[attemptVal][letterPos];
  return (
    <div>{letter}</div>
  );
}

Letter.propTypes = {
  letterPos: number.isRequired,
  attemptVal: number.isRequired,
};

export default Letter;
