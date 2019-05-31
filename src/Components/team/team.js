import React, { Component } from 'react'
import * as s from './styles'

import IlyaHamraevPhoto from '../../assets/image/photo/IlyaHamraev.png'
import AndrewShatunovPhoto from '../../assets/image/photo/AndrewShatunov.png'
import IlyaPesterevPhoto from '../../assets/image/photo/IlyaPesterev.png'

class Team extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const team = [
      {
        firstName: 'Ilya',
        lastName: 'Khamraev',
        position: 'JS developer',
        photo: IlyaHamraevPhoto
      },
      {
        firstName: 'Andrew',
        lastName: 'Shatunov',
        position: 'DevOps engineer',
        photo: AndrewShatunovPhoto
      },
      {
        firstName: 'Ilya',
        lastName: 'Pesterev',
        position: 'Account Manager',
        photo: IlyaPesterevPhoto
      }
    ]
    
    return (
      <div className={s.team}>
        <ul className={s.team_list}>
          {team.map(person => {
            return (
              <li key={person.lastName} className={s.team_list_item}>
                <div className={s.photo_box}>
                  <img
                    className={''}
                    src={person.photo}
                    aria-hidden
                    alt='photo'
                  />
                </div>
                <p className={s.name}>{`${person.firstName} ${
                  person.lastName
                }`}</p>
                <p className={s.position}>{`${person.position}`}</p>
              </li>
            )
          })}
        </ul>
        <div className={s.teamLeader}>
          <div>
            <img
              className={s.photo_box_teamLead}
              src={require('../../assets/image/photo/MaxBuranbaev.png')}
              alt='photo'
            />
            <p className={s.name}>Max Buranbaev</p>
            <p className={s.position}>Lead JS developer</p>
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
