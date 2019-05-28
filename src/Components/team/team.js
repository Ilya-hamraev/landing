import React, { Component } from 'react'
import * as s from './styles'

class Team extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={s.team}>
        <ul className={s.team_list}>
          <li className={s.team_list_item}>
            <div className={s.photo_box}>
              <img className={''} src={''} alt='photo' />
            </div>
            <p className={s.name}>Ilya Khamraev</p>
            <p className={s.position}>JS developer</p>
          </li>
          <li className={s.team_list_item}>
            <div className={s.photo_box}>
              <img className={''} src={''} alt='photo' />
            </div>
            <p className={s.name}>Andrew Shatunov</p>
            <p className={s.position}>DevOps engineer</p>
          </li>
          <li className={s.team_list_item}>
            <div className={s.photo_box}>
              <img className={''} src={''} alt='photo' />
            </div>
            <p className={s.name}>Ilya Pesterev</p>
            <p className={s.position}>Account Manager</p>
          </li>
        </ul>
        <div className={s.teamLeader}>
          <div>
            <img className={s.photo_box_teamLead} src={''} alt='photo' />
            <p className={s.name}>Max Buranbaev</p>
            <p className={s.position}> Lead JS developer</p>
          </div>
          <div>
            <div className={s.title}>Max Buranbaev</div>
            <div className={s.description}>
              You have some data needs to be visualized? We can create complex
              charts based on hightcharts.js or d3.js.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Team
