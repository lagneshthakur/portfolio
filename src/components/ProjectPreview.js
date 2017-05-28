// src/components/AthletePreview.js
import React from 'react';
import { Link } from 'react-router';

export default class ProjectPreview extends React.Component {
  render() {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12"  style={{marginTop:'20px', textAlign: 'center'}}>
        	<img src={this.props.image} className="img img-responsive" style={{borderRadius: '100%', margin:'0 auto'}} />
          	<h2>{this.props.name}</h2>
          	<p>{this.props.shortDescription}</p>
          	<Link to={`/project/${this.props.id}`}>
          	<button className='btn btn-primary'>View Details</button>
      		</Link>
      		<br/><br/>
        </div>
    );
  }
}
