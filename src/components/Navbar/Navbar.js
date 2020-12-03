import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Navbar() {
    return (
        <Router>
        <header>
        <nav>
            <ul className="nav-links">
                <li><Link to="/">Highlights</Link></li>
                <li><Link to="/">Latest</Link></li>
                <li><Link to="/">Deals</Link></li>
                <li><Link to="/">News</Link></li>
            </ul>
        </nav>
    </header>
</Router>
    )
}