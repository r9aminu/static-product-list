import './App.css';
import React from 'react';
import ProductList from './ProductList'; // Import ProductList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Optionally, remove or comment out the default React logo and text to make room for your component */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>Edit <code>src/App.js</code> and save to reload.</p> */}
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a> */}
        
        <ProductList />
      </header>
    </div>
  );
}

export default App;
