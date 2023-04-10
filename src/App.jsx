import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Feature from './components/Feature/Feature';

const App = () => {
  return (
    <div>
          <Header></Header>
          <Home></Home>
          <Category></Category>
          <Feature></Feature>
          <Outlet></Outlet>

    </div>
  );
};

export default App;