import React from 'react';
import './App.css';
import DataList from './components/DataList'

function App() {
  return (
    <div className="App">
       <h1 className="App-header">ASYNC REDUX &#8669; Indian Cities</h1>
      <div className= "user-exp">
       <div className= "boxes">
         User Input
       </div>
       <div className= "boxes">
         <DataList />
         API Data
       </div>
      </div>
    </div>
  );
}

export default App;
