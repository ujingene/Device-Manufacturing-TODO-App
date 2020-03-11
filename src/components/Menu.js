import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <BrowserRouter>
    <Route exact path="/" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    </Route>
    </BrowserRouter>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="info">
          <BrowserRouter>
              <Route exact path="/AddDevice" className="d-lock">Eugene Wanjira</Route>
          </BrowserRouter>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <a href="addDevice" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
              </p>
            </a>
         </li>
          <li className="nav-item">
            <a href="addDevice" className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Add new Smart Device
              </p>
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                 Smart Devices
              </p>
            </a>
          </li>
    

     </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
