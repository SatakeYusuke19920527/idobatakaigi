import React, { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Main from './components/Main';

function App() {
  const [name, setName] = useState('')
  if (name.length === 0) {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
}

export default App;
