import React from 'react';
import './App.css';
import { Header } from './Components/HeaderComponent/Header';
import  Body  from './Components/BodyComponent/body';
import { Footer } from './Components/FooterComponent/footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
  );
}

export default App;
