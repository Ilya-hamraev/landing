import React from "react";
import * as s from "./styles";

class Communication extends React.Component {
  render() {
    return (
      <div className={s.communication}>
        <div className={s.img_box}>
          <video
            src="https://media.giphy.com/media/X5i2BoQeD9kWY/giphy.mp4"
            autoPlay
            loop
          />
        </div>
        <div className={s.contacts}>
          <p className={s.title}>We are hiring</p>
          <div className={s.about}>
            <p className={s.about_title}>Cool JS Developer</p>
            <p className={s.about_text}>
              We find someone who can do react.js, redux, redux-saga.
            </p>
          </div>
          <div>
            <p className={s.contact}>
              Contact us <a href="mailto:hey@jsnake.tech">hey@jsnake.tech</a>
              <br /> or use <a href="https://t.me/max_buranbaev">Telegram</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Communication;
