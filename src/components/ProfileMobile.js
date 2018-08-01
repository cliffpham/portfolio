import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
import Introduction from './Introduction';
import Logo from '../images/mylogo.png';


class ProfileMobile extends Component {
    render() {
  
      return (

        <div style={styles.wrapper}>

        <div style={styles.main}>


  <Introduction/>

  




        </div>

        </div>



);
}
}

export default ProfileMobile

const styles = {
    wrapper: {
      height: '99%', 
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
  
    }
}