import React from 'react';
import { Link } from 'react-router';

export default class AboutMePage extends React.Component {
  render() {
    return (
        <div className="container">
          <h2>
          	<pre>I already told you I am under construction didn't I.</pre>
          </h2>
          <br/>
          <div className="col-sm-6">
          	<img src={'http://www.iamazmi.com/wp-content/uploads/2016/05/underconstruction.jpg'} className="img img-responsive" style={{margin:'0 auto'}} />
          </div>
        </div>
    );
  }
}
