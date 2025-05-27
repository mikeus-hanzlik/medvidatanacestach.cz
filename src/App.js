import React from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import Content from "./components/Content";
import { NavLink } from "react-router-dom";

const App = () => {
    return (
        <div className="App-container">
            <header className="App-header" role="banner">
                <Menu />
                <h1>
                    <NavLink to="/" aria-label="Domovská stránka - Medvíďata na cestách">
                        Medvíďata na cestách
                    </NavLink>
                </h1>
            </header>
            <main className="App-main" role="main">
                <Content />
            </main>
            <footer className="App-footer" role="contentinfo" style={{ display: 'none' }}>
                {/* Future footer content */}
            </footer>
        </div>    );
};

export default App;
