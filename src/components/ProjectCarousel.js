import React from "react";
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';
import Projects from '../components/Projects';
import Projects2 from '../components/Projects2';
import Projects3 from '../components/Projects3';
import ScrollLock from 'react-scrolllock';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class ProjectCarousel extends React.Component {
  render() {

    return (
        <div style={{height: 700, width: "80%"}}>
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        totalSlides={3}
        >
       <ButtonNext style={{position: 'fixed', top: 350, right: '6%', borderWidth: 0, backgroundColor: '#FFF', outline: 'none'}}> <img style={{width: '50px', height: '50px'}}src={require('../images/arrowRight.png')} alt="Next"/> </ButtonNext>
       <ButtonBack style={{position: 'fixed', top: 350, left: '6%', borderWidth: 0, backgroundColor: '#FFF', outline: 'none'}}> <img style={{width: '50px', height: '50px'}}src={require('../images/arrowLeft.png')} alt="Back"/> </ButtonBack>
      
      <Slider>
      <Slide index={0}><Projects /></Slide>
      <Slide index={1}><Projects2 /></Slide>
      <Slide index={2}><Projects3 /></Slide>
      </Slider>

      </CarouselProvider>
      <ScrollLock />
      </div>
    );
  }
}