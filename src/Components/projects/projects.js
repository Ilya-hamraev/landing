import React, {Component} from 'react'
import * as s from './styles'


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className={s.projects}>
                <div className={s.projects_list}>
                    <div className={s.projects_list__item}>
                        <div className={s.image_container}>
                            <img className={s.img} src={require(`../../assets/image/content/bitmap.jpg`)} />
                        </div>
                        <div className={s.description}>
                            <span className={s.name}>BoostUp</span>
                            <span className={s.time}>2018</span>
                        </div>
                    </div>
                    <div className={s.projects_list__item}>
                        <div className={s.image_container}>
                            <img className={s.img} src={require(`../../assets/image/content/bitmap.jpg`)} />
                        </div>
                        <div className={s.description}>
                            <span className={s.name}>MemoNews</span>
                            <span className={s.time}>2016 – <br /> Nowdays</span>
                        </div>
                    </div>
                    <div className={s.projects_list__item}>
                        <div className={s.image_container}>
                            <img className={s.img} src={require(`../../assets/image/content/bitmap.jpg`)} />
                        </div>
                        <div className={s.description}>
                            <span className={s.name}>Dokis</span>
                            <span className={s.time}>2016</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects