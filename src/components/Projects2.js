import React, {Component} from 'react';


class Projects2 extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://res.cloudinary.com/djenpulgm/video/upload/v1532412738/DemoReel2.mp4'
        }
    }
  render() {

    return (
    <div style={{backgroundColor: '#BF8FCC', height: 700, width: 711.09, position: "absolute", top: "5%", left: "21%"}}>
    
      <div style={{backgroundColor: '#BF8FCC', display: 'flex', flexDirection: "row", width: 700}}>

        <div style={{backgroundColor: '#BF8FCC', width: 700, height: 150, alignContent: 'stretch', padding: 10}}>

          <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 50, letterSpacing:'-3px', textAlign: 'left', margin: 0}}> ANOTOKI </h1>
      
          <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 18, textAlign: 'left'}}> 
          A CRUD timeline web application. The project was built using NodeJS, Express, Sequelize and MySQL. Users can search, upload and tag images to the site which is then displayed similarly to a museum exhibit. Check out the     
          <a style={{  color: "yellow",textDecoration: 'none'}}href="https://project-2-crud-app.herokuapp.com/blog"> live demo</a>
          </textbody>

        </div>

    </div>

    <div style={{marginTop: 10, objectFit: 'cover'}}>
    <video style={VideoStyle} loop autoPlay muted>
    <source src={this.state.videoURL} type="video/mp4" />
    Your browser does not support the video tag.
    </video>

    <div>
    
    <a href="https://github.com/tomkim825/Project2">
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

export default Projects2

const VideoStyle = {
    width: 711,
    height: 400,
    objectFit: 'cover'
}
