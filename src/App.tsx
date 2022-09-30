import React from 'react';
import './App.css';

import Users from './Users';
import useUsers from "./hooks/useUsers";
import Paging from "./Paging";

function App() {
  const {
    isPrevEnabled,
    isNextEnabled,
    error,
    users, 
    prev, 
    next,
  } = useUsers();
  
  return (
    <div className="App">
      {!error && !users && (
        <div>Loading...</div>
      )}
      {error && (
        <div>
          {error}
        </div>
      )}
      <Users users={users ?? []} />
      <Paging current={0} isPrevEnabled={isPrevEnabled} isNextEnabled={isNextEnabled} onPrev={prev} onNext={next} />
    </div>
  );
}

export default App;
