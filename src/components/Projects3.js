import React, {Component} from 'react';


class Projects3 extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/djenpulgm/video/upload/v1532493118/DoggyDemo.mp4'
        }
    }
  render() {

    return (
    <div style={{backgroundColor: '#FFAE42', height: 700, width: 711.09, position: "absolute", top: "5%", left: "21%"}}>
    
      <div style={{backgroundColor: '#FFAE42', display: 'flex', flexDirection: "row", width: 700}}>

        <div style={{backgroundColor: '#FFAE42', width: 700, height: 150, alignContent: 'stretch', padding: 10}}>

          <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'left', margin: 0}}> GIVE A DOG A BONE </h1>
      
          <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 18, textAlign: 'left'}}> 
           A web application to help rescue dogs find loving homes using a similar UI as dating apps, such as Tinder. The app was built using HTML CSS JQuery Javascript Firebase AJAX Bootstrap.
          </textbody>

        </div>

    </div>

    <div style={{marginTop: 10, objectFit: 'cover'}}>
    <video style={VideoStyle} loop autoPlay muted>
    <source src={this.state.videoURL} type="video/mp4" />
    Your browser does not support the video tag.
    </video>

    <div>
    
    <a href="https://github.com/balbano80/Doggie-Tinder">
    <img 
    src={require('../images/github.png')}
    style={{width:75, height: 75, paddingTop: 13, paddingLeft: 310}}
    alt="github"
    />
    </a>

    </div>

    </div>

    

        
    
    </div>    
    );
    
  }

}

export default Projects3

const VideoStyle = {
    width: 711,
    height: 400,
    objectFit: 'cover'
}
