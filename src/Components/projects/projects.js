import React, { Component } from 'react'
import * as s from './styles'

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={s.projects}>
        <ul className={s.projects_list}>
          <li className={s.projects_list__item}>
            <a
              href='https://boostup.ai/'
              target='_blank'
              className={s.projects_item__link}
            >
              <div className={s.image_container}>
                <img
                  className={s.img}
                  src={require(`../../assets/image/content/boostup.svg`)}
                />
              </div>
              <div className={s.description}>
                <span className={s.name}>BoostUp</span>
                <span className={s.time}>2018</span>
              </div>
            </a>
          </li>
          <li className={s.projects_list__item}>
            <a
              href='http://www.memonews.com/en/'
              target='_blank'
              className={s.projects_item__link}
            >
              <div className={s.image_container}>
                <iframe
                  className={s.img}
                  src='https://giphy.com/embed/RmrjX0CnxmHug'
                  width='100%'
                  height='100%'
                  allowFullScreen
                />
              </div>
              <div className={s.description}>
                <span className={s.name}>MemoNews</span>
                <span className={s.time}>
                  2016 – <br /> Nowdays
                </span>
              </div>
            </a>
          </li>
          <li className={s.projects_list__item}>
            <a
              href='https://dokis.ru/'
              target='_blank'
              className={s.projects_item__link}
            >
              <div className={s.image_container}>
                <img
                  className={s.img}
                  src={require(`../../assets/image/content/bitmap.jpg`)}
                />
              </div>
              <div className={s.description}>
                <span className={s.name}>Dokis</span>
                <span className={s.time}>2016</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Projects
