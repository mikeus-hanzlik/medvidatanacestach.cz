import React, {Component} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import Content from "./components/Content";

class App extends Component {
    render() {
        return (
            <div className="App-container">
                <header className="App-header">
                    <h1>Medvíďata na cestách</h1>
                    <Menu/>
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
