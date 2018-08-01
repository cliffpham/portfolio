import React, {Component} from 'react';
import Fill from '../images/contact.jpg'

class Mobile extends Component {
  render() {
    return (
    <div style={styles.wrapper}>

    <div style={styles.main}>

      <div style={styles.info}>


      <a href="https://www.linkedin.com/in/cliff-pham-63467473">
      <img 
      src={require('../images/linkedin.png')}
      style={styles.icons}
      alt="linkedin"
      />
      </a>

      <a href="https://github.com/cliffpham">
      <img 
      src={require('../images/github.png')}
      style={styles.icons}
      alt="github"
      />
      </a>
    
      <a href="mailto:cliffpham@gmail.com">
      <img 
      src={require('../images/email.png')}
      style={styles.icons}
      alt="email"
      />
      </a>
 
      </div>

      <div style={{backgroundImage: `url(${Fill})`, width: 650, height: 700, backgroundPosition: 'center'}}>
      </div>

    </div>
 
    </div>
    
    )
  }
}

export default Mobile

const styles = {
  wrapper: {
    height: '100%', 
    width: '100%', 
    position: "fixed",
    left: '0', 
    top: "6.5%", 
  },
  main: {
    margin: 'auto', 
    display: 'flex', 
    flexDirection: "row", 
    height: '100%'

  },
  info: {
    backgroundColor: '#FF4E20', 
    width: 200, 
    height: 700, 
    flexDirection:"column"

  },
  header: {
    color: 'white', 
    fontFamily: 'Overpass Mono, monospace',
    fontSize: 30, 
    letterSpacing:'-3px', 
    textAlign: 'right', 
    padding: 10,
    margin: 0

  },
  icons: {
    width:75, 
    height: 75, 
    marginTop: 75, 
    marginLeft: 15,
    marginRight: 15
  },

}