import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
{/* provider is a redux store works like rapper 
        which rap the app function 
            login functionality ke andr hi run karega 
*/}

  </React.StrictMode>
);

