import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
// import ReactPlayer from 'react-player'
import Counter from './components/Counter/Counter'

function App() {
  return (
    <div className="App">
    <Counter />
    <Menu 
      vegatebles='cauliflower'
      meat='tenderloin'
      sauce='bbq' />
    <Menu 
      vegatebles='b'
      meat='reg'
      sauce='erg' />
    <Menu 
      vegatebles='333'
      meat='33a'
      sauce='33b' />
    {/* <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' /> */}
    </div>
  );
}

export default App;
