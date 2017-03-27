// src/components/IndexPage.js
import React from 'react';
import Moon from './IndexComponents/Moon';
import Flowers from './IndexComponents/Flowers';
import Mountains from './IndexComponents/Mountains';

var styles = {
  headingStyle:{
    fontFamily: 'cursive',
    display: 'inline-block',
    fontWeight: 900,
    fontSize: '4em',
    margin: '0.3em',
    position: 'relative',
    zIndex: 1,
  }
}
export default class IndexPage extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <div>
          <div className='col-xs-12 col-md-offset-1 col-md-6' style={{color: 'rgb(69, 125, 176)'}}>
              <div className='hidden-xs' style={{marginTop: '150px'}}>
                <p style={styles.headingStyle}> Hi!</p>
                <p style={styles.headingStyle}> I am Lagnesh Thakur </p>
              </div>
              <div className='hidden-sm hidden-md hidden-lg'>
                <p style={styles.headingStyle}> Lagnesh </p>
                <p style={styles.headingStyle}> Thakur </p>
              </div>
          </div>
          <div className='col-xs-offset-3 col-xs-7 col-md-offset-1 col-md-3'>
            <img className='img-responsive' src="/image/ME1.jpg" /><br/>
          </div>
        </div>
        <Moon/>
        <Flowers/>
        <Mountains/>
      </div>
    );
  }
}
