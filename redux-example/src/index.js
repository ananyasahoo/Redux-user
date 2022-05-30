// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import { Provider } from 'react-redux';
import Login from './components/Login';
import  Signup  from './components/Signup';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import {store,persistor} from './redux/store';
import './index.css';
import App  from './App';
import ModalComponent from './components/ModalComponent';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
      {/* <Login/>
      <Signup/>
     /* <ModalComponent/> */}
    </PersistGate>
  </Provider>
 


);
