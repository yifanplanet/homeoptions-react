import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from "./pages/home.jsx";
import HowPage from "./pages/how.jsx";
import AboutPage from "./pages/about.jsx";

const App = () => {
    return (
        <Router>
            <div>
                <ScrollToTop />
                <Navbar />

                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/how" exact>
                        <HowPage />
                    </Route>
                    <Route path="/about" exact>
                        <AboutPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
