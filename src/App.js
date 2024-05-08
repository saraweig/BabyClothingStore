import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import logo from './images/website/logo.png';
import NavBar from './shop/navBar.js';
import Navigator from './shop/navigator'
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
  <>
  <div className='App'>
    <header className='App-header'>
  <Provider store={store}>
  <BrowserRouter>
  <NavBar></NavBar>
  <Navigator></Navigator>
    </BrowserRouter>
    </Provider>
    </header>
    </div>
    </>
  );
}

export default App;


    
  
