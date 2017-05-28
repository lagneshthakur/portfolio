// src/components/ProjectsPage.js
import React from 'react';
import ProjectPreview from './ProjectPreview';
import projects from '../data/projects';

export default class ProjectsPage extends React.Component {

  render() {
    return (
    	<div className="container-fluid" style={{marginBottom: '25px'}}>
	      <div className="row">
	          {projects.map(projectData => <ProjectPreview key={projectData.id} {...projectData} />)}
	      </div>
    	</div>
    );
  }
}
