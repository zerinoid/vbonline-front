import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Sobre from "./components/sobre.component";
import ListaDocs from "./components/lista-docs.component";

function App() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar">
                    <code>>></code>
                    <Link to="/" className="nav-link">
                        <button>Docs</button>
                    </Link>
                    <Link to="/sobre" className="nav-link">
                        <button>DT Online</button>
                    </Link>
                    <button>pt</button>
                    <button>en</button>
                </nav>
                <Route path="/" exact component={ListaDocs} />
                <Route path="/sobre" component={Sobre} />
            </div>
        </Router>
    );
}

export default hot(App);
