import React from 'react';
import './App.css';
import DataList from './components/DataList'
import India from './img/india.png'

function App() {
  return (
    <div className="App">
       <h1 className="App-header">ASYNC REDUX &#8669; Indian Cities</h1>
      <div className= "user-exp">
       <div className= "boxes">
         <h3>Discover For Yourself</h3>
       </div>
       <div className="boxes">
         <h3>India Info</h3>
         <figure>
        <img className = "flag" src={India} alt={"flag"} />
      </figure>
         <p className="india-info">India (official name: the Republic of India, Hindi: Bhārat Gaṇarājya) is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[e] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.</p>
         <a href='https://en.wikipedia.org/wiki/India'> Wikipedia </a>
       </div>
       <div className= "boxes">
         <DataList />
         
       </div>
      </div>
    </div>
  );
}

export default App;
