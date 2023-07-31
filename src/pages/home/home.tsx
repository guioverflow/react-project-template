import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/NavBar';
import SideMenu from '../../components/SideMenu/index';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SideMenu/>
        <div className="d-grid gap-2">
          <Link to="/pdv" className="btn btn-primary" role="button">PDV</Link>
          <Link to="/stock" className="btn btn-primary" role="button">Estoque</Link>
          <Link to="/users" className="btn btn-primary" role="button">Usuários</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
