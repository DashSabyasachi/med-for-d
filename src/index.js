import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './component/home';
// import App from './component/App';
import './App.css';
import './index.css';
import './stylehome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home/>
  </React.StrictMode>
);

reportWebVitals();
