import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import Throwback from './components/Throwback';
import 'normalize.css/normalize.css';
import './styles/styles.scss'



ReactDOM.render(<AppRouter />, document.getElementById('app'));