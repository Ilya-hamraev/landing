import React from 'react'

import Header from './Components/header'
import Projects from './Components/projects'
import Amenities from './Components/amenities'
import Team from './Components/team'
import Communication from './Components/communication'
import Footer from './Components/footer'

import './AppStyles/normalize.css' // normalize
import './AppStyles/App.css' // styles

function App () {
  return (
    <div className='App'>
      <div className='Wrapper'>
        <Header />
        <Projects />
        <Amenities />
        <Team />
        <Communication />
      </div>
      <Footer />
    </div>
  )
}

export default App
