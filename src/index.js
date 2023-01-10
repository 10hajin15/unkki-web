import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Unkki from './unkki';
import './styles/create-account-style.css';
import './styles/create-rollingpaper-style.css';
import './styles/create-unkki-style.css';
import './styles/main-style.css';
import './styles/modal-letter.css';
import './styles/modal-message.css';
import './styles/read-letters-style.css';
import './styles/read-style.css';

ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><Unkki /></BrowserRouter>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
