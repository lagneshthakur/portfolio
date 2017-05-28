// src/components/ProjectsMenu.js
import React from 'react';
import { Link } from 'react-router';

export default class ProjectsMenu extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav nav-tabs">
          {this.props.projects.map(menuProject => {
              if(this.props.active == menuProject.id){
                return <li role="presentation" className="active">
                  <Link key={menuProject.id} to={`/project/${menuProject.id}`}>
                    {menuProject.name}
                  </Link>
                </li>;
              }
              else{
                return <li role="presentation">
                  <Link key={menuProject.id} to={`/project/${menuProject.id}`}>
                    {menuProject.name}
                  </Link>
                </li>; 
              }
          })}
        </ul>
      </nav>
    );
  }
}
