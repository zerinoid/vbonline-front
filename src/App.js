import React from 'react';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Sobre from './components/sobre.component';
import ListaDocs from './components/lista-docs.component';
import Video from './components/video.component';

function App() {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <nav className="navbar">
                        <code>>></code>
                        <Link to="/" className="nav-link">
                            <button>Docs</button>
                        </Link>
                        <Link to="/sobre" className="nav-link">
                            <button>VB Online</button>
                        </Link>
                        <button>pt</button>
                        <button>en</button>
                    </nav>
                    <Route path="/" exact component={ListaDocs} />
                    <Route path="/sobre" component={Sobre} />
                    <Route path="/video" component={Video} />
                </div>
            </Router>
        </div>
    );
}

export default App;
