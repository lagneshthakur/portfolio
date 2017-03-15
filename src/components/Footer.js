import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
    var subject = "Hi Lagnesh!";
    var body = "I am sending this mail from you portfolio. Great work there mate."

    return (
      <div>
        <div className="col-xs-6 col-md-4">
          <span className="fa fa-copyright" aria-hidden="true"></span> Lagnesh Thakur | {new Date().getFullYear()}
        </div>
        <div className="col-xs-2 col-md-1 col-md-offset-5">
          <a href="#footer">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="col-xs-2 col-md-1">
          <a href="#footer">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="col-xs-2 col-md-1">
          <a href={'https://mail.google.com/mail/?view=cm&fs=1&to=lagneshthakur@gmail.com&su=' + subject + '&body=' + body}>
            <i className="glyphicon glyphicon-envelope"></i>
          </a>
        </div>
      </div>
    );
  }
}
