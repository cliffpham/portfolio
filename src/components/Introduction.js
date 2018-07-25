import React, {Component} from 'react';
import Background from '../images/profile.jpg'


class Introduction extends Component {
  render() {
    return (
    <div style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', height: 700,}}>
    <div style={{backgroundColor: 'rgba(0,0,0,.5)', height: 175, paddingLeft: 45, paddingRight: 45}}>
    <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'center', paddingTop: 10, paddingBottom: 8, margin: 0}}> WELCOME </h1>
    <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 18, paddingLeft: 5, textAlign: 'center', margin: 0}}>Hey there. Thanks for visiting my page! My name is Cliff Pham and I'm a computer whisperer ...
    I mean, I'm a developer. Flip around to see some of my coding projects and get to learn more about me. </textbody>
    </div>
    </div>
    
    )
  }
}

export default Introduction