import React from 'react';
import ReactDOM from 'react-dom';
import { FavoritesContextProvider } from './store/favorites-context';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>
    , document.getElementById('root'));
