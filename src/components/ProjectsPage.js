// src/components/ProjectsPage.js
import React from 'react';
import ProjectPreview from './ProjectPreview';
import projects from '../data/projects';

export default class ProjectsPage extends React.Component {

  render() {
    return (
      <div className="container" style={{marginTop:'20px'}}>
        <div>
          {projects.map(projectData => <ProjectPreview key={projectData.id} {...projectData} />)}
        </div>
      </div>
    );
  }
}
