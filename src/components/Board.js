import React from 'react';
// import Context from '../context/Context';
import Letter from './Letter';

function Board() {
  // const { board } = useContext(Context);
  return (
    <div>
      <div>
        <Letter letterPos={ 0 } attemptVal={ 0 } />
        <Letter letterPos={ 1 } attemptVal={ 0 } />
        <Letter letterPos={ 2 } attemptVal={ 0 } />
        <Letter letterPos={ 3 } attemptVal={ 0 } />
        <Letter letterPos={ 4 } attemptVal={ 0 } />
      </div>
      <div>
        <Letter letterPos={ 0 } attemptVal={ 1 } />
        <Letter letterPos={ 1 } attemptVal={ 1 } />
        <Letter letterPos={ 2 } attemptVal={ 1 } />
        <Letter letterPos={ 3 } attemptVal={ 1 } />
        <Letter letterPos={ 4 } attemptVal={ 1 } />
      </div>
      <div>
        <Letter letterPos={ 0 } attemptVal={ 2 } />
        <Letter letterPos={ 1 } attemptVal={ 2 } />
        <Letter letterPos={ 2 } attemptVal={ 2 } />
        <Letter letterPos={ 3 } attemptVal={ 2 } />
        <Letter letterPos={ 4 } attemptVal={ 2 } />
      </div>
      <div>
        <Letter letterPos={ 0 } attemptVal={ 3 } />
        <Letter letterPos={ 1 } attemptVal={ 3 } />
        <Letter letterPos={ 2 } attemptVal={ 3 } />
        <Letter letterPos={ 3 } attemptVal={ 3 } />
        <Letter letterPos={ 4 } attemptVal={ 3 } />
      </div>
      <div>
        <Letter letterPos={ 0 } attemptVal={ 4 } />
        <Letter letterPos={ 1 } attemptVal={ 4 } />
        <Letter letterPos={ 2 } attemptVal={ 4 } />
        <Letter letterPos={ 3 } attemptVal={ 4 } />
        <Letter letterPos={ 4 } attemptVal={ 4 } />
      </div>
    </div>
  );
}

export default Board;
