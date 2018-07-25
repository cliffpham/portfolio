import React, {Component} from 'react';
import Fill from '../images/contact.jpg'




class Contact extends Component {
  render() {
    return (
    <div style={{height: 700, width: 700, position: "absolute", top: "7.5%", left: "25%"}}>

    <div style={{margin: 'auto', display: 'flex', flexDirection: "row", height: 700}}>

      <div style={{backgroundColor: '#FF4E20', width: 250, height: 700, flexDirection:"column"}}>

      <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'right', paddingTop: 10, paddingRight: 20, margin: 0}}> CONTACT </h1>

      <a href="https://www.linkedin.com/in/cliff-pham-63467473">
      <img 
      src={require('../images/linkedin.png')}
      style={{width:75, height: 75, marginTop: 75, marginLeft: 75}}
      alt="linkedin"
      />
      </a>

      <a href="https://github.com/cliffpham">
      <img 
      src={require('../images/github.png')}
      style={{width:75, height: 75, marginTop: 75, marginLeft: 75}}
      alt="github"
      />
      </a>
    
      <a href="mailto:cliffpham@gmail.com">
      <img 
      src={require('../images/email.png')}
      style={{width:75, height: 75, marginTop: 75, marginLeft: 75}}
      alt="email"
      />
      </a>
 
      </div>

      <div style={{backgroundImage: `url(${Fill})`, width: 500, height: 700, backgroundPosition: 'center'}}>
 
      </div>

    </div>
 
    </div>
    
    )
  }
}

export default Contact