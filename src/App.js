import React from 'react';
import './App.css';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <TopHeadline></TopHeadline>
      <News></News>
      <Header></Header>
    </div>
  );
}

export default App;
