import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="dashboard" className="nav-link">
                <i className="nav-icon far fa-image" />
                <p>Dashboard</p>
              </Link>
            </li>

            <li className="nav-item has-treeview menu-open">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Profile
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="my-profile" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Profile</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="chnage-password" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Password</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="client-list" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>Client</p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Master
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="fess" className="nav-link">
                    <i className="nav-icon fas fa-rupee-sign" />
                    <p>Fees</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="ay" className="nav-link">
                    <i className="nav-icon fas fa-calendar-alt" />
                    <p>Assessmet Year </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="bank-list" className="nav-link">
                    <i className="nav-icon fas fa-building" />
                    <p>Bank Master</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="employee-list" className="nav-link">
                    <i className="nav-icon fas fa-user" />
                    <p>Employee List</p>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="user-role" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>User Role</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="dashboard" className="nav-link">
                <i className="nav-icon fas fa-edit" />
                <p> Pending Document</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
