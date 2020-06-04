import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Electrip Appointment System</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/electrip-sched/" className="nav-link">Appointments</Link>
          </li>
          <li className="navbar-item">
          <Link to="/electrip-sched/create" className="nav-link">Create Appointment</Link>
          </li>
          <li className="navbar-item">
          <Link to="/electrip-sched/user" className="nav-link">Create User</Link>
<<<<<<< HEAD
          </li>
          <li className="navbar-item">
          <Link to="/electrip-sched/userlist" className="nav-link">User List</Link>
=======
>>>>>>> fe845ec7fe66300d9e21328f9d78b29691781d8a
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
