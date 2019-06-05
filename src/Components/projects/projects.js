import React from "react";
import * as s from "./styles";

function Projects() {
  return (
    <div className={s.projects}>
      <ul className={s.projects_list}>
        <li className={s.projects_list__item}>
          <a
            href="https://boostup.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.projects_item__link}
          >
            <div className={s.image_container}>
              <img
                className={s.img}
                src={require(`../../assets/image/content/boostup.png`)}
                alt="project Boostup"
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
            href="http://www.memonews.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.projects_item__link}
          >
            <div className={s.image_container}>
              <video
                className={s.img}
                src="https://media.giphy.com/media/RmrjX0CnxmHug/giphy.mp4"
                loop
                autoPlay
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
            href="https://dokis.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.projects_item__link}
          >
            <div className={s.image_container}>
              <img
                className={s.img}
                src={require(`../../assets/image/content/bitmap.jpg`)}
                alt="project Dokis"
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
  );
}

export default Projects;
