import React, { Component } from 'react';
// import './App.css';
import FlipPage from 'react-flip-page';
import Title from './components/Title';
import Introduction from './components/Introduction';
import Projects from './components/Projects'
import Contact from './components/Contact'
// import { Row, Col } from 'react-flexbox-grid';

class Desktop extends Component {
  render() {
    return (
      <div className="Desktop" style={{display: 'flex', justifyContent: 'center', margin: 0, paddingTop: 50, height: 700}}>
          <FlipPage
            orientation="horizontal"
            animationDuration="400"
            width="700"
            height="700"
            uncutPages="false"
            showHint="true"
            showSwipeHint="true"
            >
            
            <article>
            <Title/>
            </article>
            
            <article>
            <Introduction/>
            </article>
            
            <article>
            <Projects />
            </article>

            <article>
            <Contact/>
            </article>

          </FlipPage> 
        </div>


    );
  }
}

export default Desktop;
