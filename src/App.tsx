
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainRouter from './routes/routes';


const App = () => {
  return (
    <MainRouter></MainRouter>
  );
};

export default App;