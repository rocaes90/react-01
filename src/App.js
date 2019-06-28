import React, { useState } from 'react';
import './App.css';

import MyClassComponent from './components/myClassComponent'
import MyFunctionalComponent from './components/myFunctionalComponent';

import ExampleUseState from './hooks/exampleUseState';
import ExampleUseEffect from './hooks/exampleUseEffect';

function App() {
  const [nombre, setNombre] = useState('React')

  return (
    <div className="App">
      <div className="App-header">
        <h4>Without Hooks Implementation</h4>
        <MyClassComponent />
        <MyFunctionalComponent nombre={nombre} />
        <h4>Hooks Implementation</h4>
        <ExampleUseState />
        <ExampleUseEffect />
      </div>
    </div>
  );
}

export default App;
