import React, {Component} from 'react'
import * as s from './styles'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className={s.header}>
                <a href='#' className={s.header_logo}>JSNAKE</a>
                <a href='#' className={s.contacts}>Contacts</a>
                <div className={s.header_title}>
                    We cook custom projects <br />with <span>JavaScript</span>
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

}

export default Header