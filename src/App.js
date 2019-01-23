import React, {Component} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import Content from "./components/Content";
import NavLink from "react-router-dom/es/NavLink";

class App extends Component {
    render() {
        return (
            <div className="App-container">
                <header className="App-header">
                    <Menu/>
                    <h1><NavLink to="/">Medvíďata na cestách</NavLink></h1>
                </header>
                <div className="App-main">
                    <Content/>
                </div>
                {/*<div className="App-footer">*/}
                {/*<p>Footer</p>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
