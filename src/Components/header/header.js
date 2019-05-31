import React from 'react'
import * as s from './styles'

function Header (props) {
  return (
    <div className={s.header}>
      <a href='index.html' className={s.header_logo}>
        <img
          src={require('../../assets/image/content/jsnake.svg')}
          alt='logo'
        />
      </a>
      <button onClick={() => props.scrollTo()} className={s.contacts}>
        Contacts
      </button>
      <div className={s.header_title}>
        We cook custom projects <br />
        with <span>JavaScript</span>
      </div>
      <nav className={s.header_nav}>
        <div className={s.header_nav_item}>React.js</div>
        <div className={s.header_nav_item}>Redux</div>
        <div className={s.header_nav_item}>Node.js</div>
        <div className={s.header_nav_item}>Firebase</div>
        <div className={s.header_nav_item}>React Native</div>
      </nav>
    </div>
  )
}

export default Header
