import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './components/common/buttons'
import { BrowserView, MobileView } from 'react-device-detect';
import InitialPage from './page/InitialPage';

function App() {
  return (
      <BrowserView style={{position: 'absolute', width: '100%', height: '100%', backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)'}}>
        <InitialPage />
      </BrowserView>
  );
}

export default App;
