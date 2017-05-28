// src/components/IndexPage.js
import React from 'react';
import ParallaxDiv from './IndexComponents/ParallaxDiv';

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
                <p className="indexWelcome"> Hi!</p>
                <p className="indexWelcome"> I am Lagnesh Thakur </p>
                <pre> And I am UNDERCONSTRUCTION </pre>
              </div>
              <div className='hidden-sm hidden-md hidden-lg'>
              <p className="indexWelcome"> Hi!</p>
              <br/>
              <p className="indexWelcome"> I am Lagnesh</p>
              </div>
          </div>
          <div className='col-xs-offset-3 col-xs-7 col-md-offset-1 col-md-3'>
            <img className='img-responsive' src="/image/ME1.jpg" /><br/>
          </div>
        </div>
        <ParallaxDiv image='url(/image/moon.jpg)' heading= 'Be like the moon' text= 'Full of imperfections still reflecting only light' />
        <ParallaxDiv image='url(/image/plants.jpg)' heading= 'Be like the flowers' text= 'And spread your fragnance' />
        <ParallaxDiv image='url(/image/mountains.jpg)' heading= 'Be like the mountains' text= 'Stand tall' />
      </div>
    );
  }
}
