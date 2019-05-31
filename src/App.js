import React, { Component } from 'react'

import Header from './Components/header'
import Projects from './Components/projects'
import Amenities from './Components/amenities'
import Team from './Components/team'
import Communication from './Components/communication'
import Footer from './Components/footer'

import './AppStyles/normalize.css' // normalize
import './AppStyles/App.css' // styles

import scrollToComponent from 'react-scroll-to-component'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='Wrapper'>
          <Header
            scrollTo={() =>
              scrollToComponent(this.lol, {
                offset: 0,
                align: 'top',
                duration: 1500
              })
            }
          />
          <Projects />
          <Amenities />
          <Team />
          <Communication
            ref={section => {
              this.lol = section
            }}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
