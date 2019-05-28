import React, { Component } from 'react'
import * as s from './styles'

class Amenities extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={s.amenities}>
        <ul className={s.amenities_list}>
          <li className={s.amenities_list_item}>
            <p className={s.title}>Minimal Viable Product</p>
            <p className={s.description}>
              You have an idea of project? You want to check how it would work?
              We can build quick and cheap minimal viable version of your
              product.
            </p>
          </li>
          <li className={s.amenities_list_item}>
            <p className={s.title}>Bussiness proceses optimisation</p>
            <p className={s.description}>
              You have some data needs to be visualized? We can create complex
              charts based on hightcharts.js or d3.js.
            </p>
          </li>
          <li className={s.amenities_list_item}>
            <p className={s.title}>Data Visualisation</p>
            <p className={s.description}>
              You have routine tasks which is taking lots of time? We can add
              some coding magic and help you to get rid of it.
            </p>
          </li>
          <li className={s.amenities_list_item}>olol</li>
        </ul>
      </div>
    )
  }
}

export default Amenities
