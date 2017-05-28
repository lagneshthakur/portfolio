import React from 'react';

export default class ParallaxDiv extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
    <div className="row" style={{
      backgroundImage: this.props.image ,
      backgroundAttachment: 'fixed',
      margin: '0 auto',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: 'rgb(96, 172, 234)',
      zIndex: -1,
      minHeight: '110%',
      clear: 'both',
      }}>
      <div>
        <br/><br/><br/>
        <p className='indexHeading'> {this.props.heading} </p>
        <p className='indexText'> {this.props.text} </p>
        <br/>
      </div>
    </div>
  );
  }
}
