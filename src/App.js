import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    VBONLINE <code>>></code>
                </div>
            </Router>
        </div>
    );
}

export default App;
