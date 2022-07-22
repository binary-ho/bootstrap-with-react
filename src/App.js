import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './components/common/buttons'
import { BrowserView, MobileView } from 'react-device-detect';

function App() {
  return (
      <BrowserView>
        <Buttons />
      </BrowserView>
  );
}

export default App;
