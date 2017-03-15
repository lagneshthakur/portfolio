// src/components/AthletePreview.js
import React from 'react';
import { Link } from 'react-router';

export default class ProjectPreview extends React.Component {
  render() {
    return (
      <Link to={`/project/${this.props.id}`}>
        <div className="well">
          <h2>{this.props.name}</h2>
        </div>
      </Link>
    );
  }
}
