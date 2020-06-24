import store from './redux/state.js'; 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                            <App 
                                    state={state} 
                                    // addPost={store.addPost.bind(store)} 
                                    // updateNewPostText={store.updateNewPostText.bind(store)} 
                                    dispatch = {store.dispatch.bind(store)}
                            />
            </BrowserRouter>      
        </React.StrictMode>,
        document.getElementById('root')
                    );
}
rerenderEntireTree(store.getState());
store.subscribe (rerenderEntireTree);

