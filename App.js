import React from 'react';
import './App.css';



import Navbar from './components/Navbar';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

const App=()=>{
  return(
    <div className='app-wrapper'>
     <Header/>
     <Navbar/>
     <Main/>
    </div>
  )
}
export default App;