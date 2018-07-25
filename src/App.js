import React, { Component } from 'react';
import {
  Route,
  HashRouter as Router,
  Link
} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import Profile from './components/Profile'
import ProjectCarousel from './components/ProjectCarousel';
import Contact from './components/Contact'
import Logo from '../src/images/mylogo.png';
import DesktopBreakpoint from './components/responsive_utilities/breakpoint';
import PhoneBreakpoint from './components/responsive_utilities/phone_breakpoint';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Profile />
  },
  {
    path: "/Projects",
    main: () => <ProjectCarousel />
  },
  {
    path: "/Contact",
    main: () => <Contact />
  }
];

class App extends Component {
  constructor (props) {
  super(props)
  this.state = {
    menuOpen: false
  }
}

// This keeps your state in sync with the opening/closing of the menu
// via the default means, e.g. clicking the X, pressing the ESC key etc.
handleStateChange (state) {
  this.setState({menuOpen: state.isOpen})  
}

// This can be used to close the menu, e.g. when a user clicks a menu item
closeMenu () {
  this.setState({menuOpen: false})
}
  render() {
    return (
      <div>
      
      <DesktopBreakpoint>

      <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "8%",
            background: "#FFF"
          }}
        >

        <Menu
        isOpen={this.state.menuOpen} 
        noOverlay 
        styles={styles}
        width="11%"
        >
        <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{paddingBottom: 25}}>
          <Link style={styles.link} onClick={() => this.closeMenu()} to="/">Home</Link>
        </li>
        <li style={{paddingBottom: 25}}>
          <Link style={styles.link} onClick={() => this.closeMenu()} to="/Projects">Projects</Link>
        </li>
        <li style={{paddingBottom: 25}}>
          <Link style={styles.link}  onClick={() => this.closeMenu()} to="/Contact">Contact</Link>
        </li>
        </ul>
        </Menu>

  
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>
  
        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>





      </DesktopBreakpoint>


      <PhoneBreakpoint>
      <div className="App" style={{display: 'flex', justifyContent: 'center', minHeight: 700}}>
      <div style={{backgroundImage: `url(${Logo})`, backgroundSize: '400px 400px', backgroundRepeat: 'no-repeat', paddingTop: 300}}>
      <h1 style={{textAlign: 'center', fontFamily: 'Ayuthaya',fontSize: 35}}> Mobile Version Coming Soon </h1>
      </div>
      </div>
      </PhoneBreakpoint>
    </div>





    );
  }
}

export default App;

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    position: 'absolute',
    height: '24px',
    width: '24px',
    left: '10px'
    
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#FFF',
    paddingTop: '230px',
    // padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },

  link: {
    color: "black",
    textDecoration: 'none'
  }
}
 



///////////////////////////////////////////////





// <Menu>
// <a id="home" className="menu-item" href="/">Home</a>
// <a id="about" className="menu-item" href="/about">About</a>
// <a id="contact" className="menu-item" href="/contact">Contact</a>
// <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
// </Menu>


// <HashRouter>
// <div>
//   <ul className="header">
//   <li><NavLink to="/">Home</NavLink></li>
//   <li><NavLink to="/stuff">Stuff</NavLink></li>
//   <li><NavLink to="/contact">Contact</NavLink></li>
// </ul>
//  <div className="content">
//     <Route exact path="/" component={Title}/>
//     <Route path="/stuff" component={Introduction}/>
//     <Route path="/contact" component={Contact}/>     
//   </div>
// </div>
// </HashRouter>