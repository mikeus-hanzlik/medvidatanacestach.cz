import React, {Component} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import Content from "./components/Content";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Medvíďata na cestách</h1>
                </header>
                <Menu/>
                <Content/>
            </div>
        );
    }
}

export default App;
