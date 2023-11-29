import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './ctx/AppContextProvider';
import { Provider } from 'react-redux';
import store from './store/store';
import SearchContextProvider from './ctx/SearchContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </AppContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
