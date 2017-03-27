import React from 'react';

var styles = {
    flowersStyle:{
    backgroundImage: 'url(/image/plants.jpg)',
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

export default class Flowers extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
    <div className="row" style={styles.flowersStyle} >
      <div style={styles.textStyle}>
        <br/><br/><br/>
        <p> Be like the flowers </p>
        <p> And spread your fragnance </p>
        <br/>
      </div>
    </div>
  );
  }
}
