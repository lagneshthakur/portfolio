// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectPage from './components/ProjectPage';
import NotFoundPage from './components/NotFoundPage';
import AboutMePage from './components/AboutMePage';


const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="projects/" component={ProjectsPage}/>
    <Route path="project/:id" component={ProjectPage}/>
    <Route path="aboutme/" component={AboutMePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
