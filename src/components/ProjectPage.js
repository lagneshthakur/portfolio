// src/components/ProjectPage.js
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ProjectsMenu from './ProjectsMenu';
import projects from '../data/projects';

export default class ProjectPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const project = projects.filter((project) => project.id === id)[0];
    if (!project) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundColor: 'grey' };
    return (
      <div className="container" style={{marginTop:'20px'}}>
        <ProjectsMenu projects={projects}/>
        <div>
          <header style={headerStyle}/>
          <div>
            <h2>{project.name}</h2>
          </div>
          <section>
            {project.start} (Find out more on <a href={project.link} target="_blank">LINK</a>).
          </section>
          <section>
            <p>{project.description}</p>
          </section>
        </div>
        <div>
          <Link to="/projects/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
