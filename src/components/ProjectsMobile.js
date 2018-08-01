import React from "react";
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';
import Projects from '../components/Projects';
import Projects2 from '../components/Projects2';
import Projects3 from '../components/Projects3';
import ScrollLock from 'react-scrolllock';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class ProjectsMobile extends React.Component {
  render() {

    return (
      <div style={styles.wrapper}>
        <div style={styles.main}>
        <div style={styles.projects}>
        <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 30, letterSpacing:'-3px', textAlign: 'left', paddingTop: 10, paddingBottom: 5, paddingLeft: 5, margin: 0}}> MEISHI </h1>
      
        <div style={{paddingLeft: 10}}>
        <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 14, textAlign: 'left'}}> 
        A mobile business card app built on React-Native, Firebase, and Expo. Users are able to create and share their digital business cards using thier phones as a QR code scanner through this app
        </textbody>
        </div>

        <div style={{marginLeft: '33.3%', marginRight: '33.3%'}}>
        <a href="https://github.com/cliffpham/meishi-mvp">
        <img 
        src={require('../images/github.png')}
        style={{width:40, height: 40, paddingBottom: 10}}
        alt="github"
        />
        </a>
  
        <a href="https://www.youtube.com/watch?v=bNAFRY-tw0E&t=178s">
        <img 
        src={require('../images/play.png')}
        style={{width:60, height: 60, paddingLeft: 15}}
        alt="github"
        />
        </a>
        </div>

        </div>
        <div style={styles.projects2}>
        
        
        <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 30, letterSpacing:'-3px', textAlign: 'left', paddingTop: 10, paddingBottom: 5, paddingLeft: 5, margin: 0}}> ANOTOKI </h1>
      
        <div style={{paddingLeft: 10}}>
        <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 14, textAlign: 'left'}}> 
        A CRUD timeline web application. The project was built using NodeJS, Express, Sequelize and MySQL. Users can search, upload and tag images to the site which is then displayed similarly to a museum exhibit
        </textbody>
        </div>

        <div style={{marginLeft: '33.3%', marginRight: '33.3%'}}>
        <a href="https://github.com/tomkim825/Project2">
        <img 
        src={require('../images/github.png')}
        style={{width:40, height: 40, paddingLeft: 25, paddingTop: 10, paddingBottom: 10}}
        alt="github"
        />
        </a>
  
        </div>
        </div>

        <div style={styles.projects3}>
        <h1 style={{color: 'white', fontFamily: 'Overpass Mono, monospace',fontSize: 30, letterSpacing:'-3px', textAlign: 'left', paddingTop: 10, paddingBottom: 5, paddingLeft: 5, margin: 0}}> GIVE A DOG A BONE </h1>
      
        <div style={{paddingLeft: 10}}>
        <textbody style={{color: 'white', fontFamily: 'Avenir', fontSize: 14, textAlign: 'left'}}> 
        A web application to help rescue dogs find loving homes using a similar UI as dating apps, such as Tinder. The app was built using HTML CSS JQuery Javascript Firebase AJAX Bootstrap
        </textbody>
        </div>

        <div style={{marginLeft: '33.3%', marginRight: '33.3%'}}>
        <a href="https://github.com/balbano80/Doggie-Tinder">
        <img 
        src={require('../images/github.png')}
        style={{width:40, height: 40, paddingLeft: 25, paddingTop: 10, paddingBottom: 10}}
        alt="github"
        />
        </a>
  
        </div>
        </div>
        </div>  
      </div>
    );
  }
}


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
      flexDirection: "column", 
      height: '100%'
  
    },
    projects: {
      width: '100%',
      height: '32%',
      backgroundColor: '#4BA9A1',

    },
    projects2: {
      width: '100%',
      height: '32%',
      backgroundColor: '#BF8FCC',

    },
    projects3: {
        width: '100%',
        height: '32%',
        backgroundColor: '#FFAE42',
  
      },
}