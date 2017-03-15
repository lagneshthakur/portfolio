// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <Header/>
        </div>
        <div id="body" className="container">{this.props.children}</div>
        <div id="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}
