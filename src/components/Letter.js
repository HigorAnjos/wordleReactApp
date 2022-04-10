import React, { useContext } from 'react';
import { number } from 'prop-types';
import Context from '../context/Context';

function Letter({ letterPos, attemptVal }) {
  const { board } = useContext(Context);

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
