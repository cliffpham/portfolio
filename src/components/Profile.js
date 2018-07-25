import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
import Title from './Title';
import Introduction from './Introduction';


class Profile extends Component {
    render() {
  
      return (

<FlipPage
  style={{height: 700, width: 700, position: "absolute", top: "7.5%", left: "19%"}}
  orientation="horizontal"
  animationDuration="400"
  width="700"
  height="700"
  uncutPages="true"
  showHint="true"
  showSwipeHint="true"
  maskOpacity="5em"
  perspective="150em"
  loopForever="true"
  >
  
  <article>
  <Title/>
  </article>
  
  <article>
  <Introduction/>
  </article>
  

</FlipPage> 



);
}
}

export default Profile