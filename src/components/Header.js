import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="Ujin"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <BrowserRouter>
        <Route exact path="/" className="nav-link">Smart Devices</Route>
        </BrowserRouter>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <BrowserRouter>
        <Route exact path="/AddDevice" className="nav-link">Smart Devices</Route>
        </BrowserRouter>
      </li>
    </ul>
   {/* Right navbar links */}
   </nav>
  {/* /.navbar */}
</div>

        )
    }
}
