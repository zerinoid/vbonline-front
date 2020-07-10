import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <nav className="navbar">
                        VBONLINE <code>>></code>
                        <button>Docs</button>
                        <button>VB Online</button>
                        <button>pt</button>
                        <button>en</button>
                    </nav>
                    <Route path="/" exact component={ListaDocs} />
                    <Route path="/sobre" exact component={Sobre} />
                </div>
            </Router>
        </div>
    );
}

export default App;
