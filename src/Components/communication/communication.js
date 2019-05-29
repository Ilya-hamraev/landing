import React, { Component } from 'react'
import * as s from './styles'

class Communication extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={s.communication}>
        <div>
          <img className={s.image_contact} src={''} alt='img' />
        </div>
        <div>
          <p className={s.title}>We are hiring</p>
          <div className={s.about}>
            <p className={s.about_title}>Cool JS Developer</p>
            <p className={s.about_text}>
              You have some data needs to be visualized? We can create complex
              charts based on hightcharts.js or d3.js.
            </p>
          </div>
          <div>
            <p className={s.contact}>
              Contact us <a href='mailto:hey@jsnake.io'>hey@jsnake.io</a>
              <br /> or use <a>Telegram</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Communication
