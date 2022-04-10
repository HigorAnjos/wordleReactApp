import React, { useState } from 'react';
import { node } from 'prop-types';
import Words from '../components/Words';
import Context from './Context';

function Provider({ children }) {
  const [board, setBoard] = useState(Words);
  const value = {
    board,
    setBoard,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
