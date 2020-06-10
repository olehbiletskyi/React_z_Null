import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';


const App = ({state}, {addPost}) => {
    
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path="/profile"  render={() => <Profile state={state.profilePage} addPost={addPost}/>}/>
                    <Route path="/dialogs"  render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path="/news"     render={() => <News/>}/>
                    <Route path="/music"    render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends"  render={() => <Friends state={state.sidebarPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
