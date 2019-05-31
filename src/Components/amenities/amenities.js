import React from 'react'
import * as s from './styles'

function Amenities() {
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
        <li className={s.amenities_list_item} style={{ paddingTop: 40 }}>
          <p className={s.title}>Data Visualisation</p>
          <p className={s.description}>
            You have routine tasks which is taking lots of time? We can add
            some coding magic and help you to get rid of it.
          </p>
        </li>
        <li className={s.amenities_list_item}>
          <div className={s.custom_bg} />
          <div className={s.contacts}>
            <p>
              Contact us <a>hey@jsnake.io</a> <br />
              or use <a>Telegram</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Amenities
