// src/components/ProjectsMenu.js
import React from 'react';
import { Link } from 'react-router';

export default class ProjectsMenu extends React.Component {
  render() {
    return (
      <nav>
        {this.props.projects.map(menuProject => {
          return <Link key={menuProject.id} to={`/project/${menuProject.id}`} activeClassName="active">
            {menuProject.name}
          </Link>;
        })}
      </nav>
    );
  }
}
