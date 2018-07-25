import React, {Component} from 'react';
// import Anotoki from '../images/Anotoki.png'
// import Meishi from '../images/Meishi3.png'


class Projects extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/djenpulgm/video/upload/v1531991693/PortVid.mp4'
        }
    }
  render() {

    return (
    <div style={{height: 700, width: 700, position: "absolute", top: "5%", left: "21%"}}>
    
      <div style={{backgroundColor: 'white', margin: 'auto', display: 'flex', flexDirection: "row", height: 400}}>


     

      <div style={{backgroundColor: '#4BA9A1', width: 330, height: 700, paddingLeft: 10, paddingRight: 3}}>

      <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'left', paddingTop: 10, paddingBottom: 15, margin: 0}}> MEISHI </h1>
      
      <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 20, textAlign: 'left'}}> 
      A mobile business card app built on React-Native, Firebase, and Expo. Users are able to create and share their digital business cards using thier phones as a QR code scanner through this app.
      </textbody>

      <a href="https://github.com/cliffpham/meishi-mvp">
      <img 
      src={require('../images/github.png')}
      style={{width:75, height: 75, paddingTop: 75, paddingLeft: 120}}
      alt="github"
      />
      </a>

      <a href="https://www.youtube.com/watch?v=bNAFRY-tw0E&t=178s">
      <img 
      src={require('../images/play.png')}
      style={{width:100, height: 100, paddingTop: 75, paddingLeft: 108}}
      alt="github"
      />
      </a>
     
      </div>

      <div style={{width: 370, height: 700, objectFit: 'fill'}}>
      <video style={VideoStyle} loop autoPlay muted>
      <source src={this.state.videoURL} type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      </div>
  
      </div>

    </div>    
    );
    
  }

}

export default Projects

const VideoStyle = {
    width: 370,
    height: 700,
    objectFit: 'fill'
}


