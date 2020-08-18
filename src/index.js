import store from './redux/redux-store.js'; 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//ініціалізуємо функцію "РЕРЕНДЕРИНГУ АПЛІКАЦІЇ ПОВНІСТЮ". Тобто вона малює всі наші компоненти.
//їй ми передаємо параметр (СТАН-state)
let rerenderEntireTree = (parameter) => {
    
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                            <App
                                    state={parameter}
                                    dispatch = {store.dispatch.bind(store)}
                                    store = {store}
                            />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
                    );
}

//викликаємо Ререндеринг передавши їй СТАН. СТАН ми викликаємо функцією getState() із store.
//(Ререндеринг викликається підписниками після того, як пройшли якісь зміни)
//store ми імпортуємо із redux-store.js. Див.там.
rerenderEntireTree(store.getState());//store має вбудовану функцію getState(), яка повертає нам стейт

store.subscribe ( () => {
    rerenderEntireTree(store.getState());
    } );

