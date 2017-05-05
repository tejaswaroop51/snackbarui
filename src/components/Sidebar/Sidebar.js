import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            
            <li className="nav-item">
              <Link to={'/Payments'} className="nav-link" activeClassName="active"><i className="icon-pie-chart"></i> Payments</Link>
            </li>
            <li className="nav-item">
              <Link to={'/Groups'} className="nav-link" activeClassName="active"><i className="icon-pie-chart"></i> Groups</Link>
            </li>
            <li className="nav-item">
              <Link to={'/Orders'} className="nav-link" activeClassName="active"><i className="icon-pie-chart"></i> Orders</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
