import React from 'react';

var styles = {
  mountainStyle:{
    backgroundImage: 'url(/image/mountains.jpg)',
    backgroundAttachment: 'fixed',
    margin: '0 auto',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgb(96, 172, 234)',
    zIndex: -1,
    minHeight: '110%',
    clear: 'both',
  },
    textStyle:{
      fontFamily: 'sans-serif',
      fontWeight: 600,
      fontSize: '32px',
      letterSpacing: 0.5,
      color: '#fff',
      position: 'relative',
      textAlign: 'center'
    },
}

export default class Mountains extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
    <div className="row" style={styles.mountainStyle} >
      <div style={styles.textStyle}>
        <br/><br/><br/>
        <p> Be like the mountains </p>
        <p> Stand tall </p>
        <br/>
      </div>
    </div>
  );
  }
}
