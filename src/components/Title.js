import React, {Component} from 'react';
import Logo from '../images/mylogo.png';

class Title extends Component {
  render() {
    return (
    <div style={{ backgroundImage: `url(${Logo})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 700}}>
    </div>
    
    )
  }
}

export default Title