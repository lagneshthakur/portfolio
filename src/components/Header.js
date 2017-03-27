import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  handleClick(e){
    document.getElementsByClassName('active')[0].className = '';
    document.getElementById(e.target.id).parentElement.className = 'active';
  }
  render() {
    return (
      <nav id="header-nav" className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main_header" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to={`/`}><span className="header-name">Lagnesh Thakur</span></Link>
          </div>
          <div className="collapse navbar-collapse" id="main_header">
            <ul className="nav navbar-nav ">
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link to={'#'} className="headerLinks" onClick={this.handleClick} id="link4"><span className="glyphicon"></span></Link></li>
              <li><Link to={'/projects/'} className="headerLinks" onClick={this.handleClick} id="link1">Projects</Link></li>
              <li><Link to={'#'} className="headerLinks" onClick={this.handleClick} id="link2">About Me</Link></li>
              <li><Link to={'#'} className="headerLinks" onClick={this.handleClick} id="link3"><span className="glyphicon"></span></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
