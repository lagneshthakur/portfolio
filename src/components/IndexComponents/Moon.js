import React from 'react';

var styles = {
    moonStyle:{
      backgroundImage: 'url(/image/moon.jpg)',
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

export default class Moon extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
    <div className="row" style={styles.moonStyle}>
      <div style={styles.textStyle}>
        <br/><br/><br/>
        <p> Be like the moon </p>
        <p> Full of imperfections still reflecting only light </p>
        <br/>
      </div>
    </div>
  );
  }
}
