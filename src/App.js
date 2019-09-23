import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";

function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper container">
        <Header />
        <Navbar />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <Dialogs state={props.appState.dialogPage} />}/>
          <Route path="/profile" render={ () => <Profile state={props.appState.profilePage}/> } />
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
