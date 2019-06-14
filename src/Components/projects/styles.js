import { css } from "emotion";
import * as v from "../../AppStyles/variables";

export const projects = css`
  padding-top: 120px;

  @media all and (max-width: 1050px) {
    padding-top: 80px;
  }

  @media all and (max-width: 778px) {
    padding-top: 30px;
  }

  @media all and (max-width: 600px) {
    padding-top: 0;
  }
`;

export const projects_list = css`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  display: grid;
`;

export const projects_item__link = css`
  text-decoration: none;
`;

export const projects_list__item = css`
  width: 100%;
  height: 100%;
  max-width: 555px;
  margin-bottom: 13px;

  &:nth-of-type(2n) {
    margin-top: 85px;

    @media all and (max-width: 600px) {
      margin-top: 60px;
    }
  }

  @media all and (max-width: 778px) {
    margin-bottom: 0px;
  }
`;

export const image_container = css`
  height: 347px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  @media all and (max-width: 778px) {
    height: 200px;
  }
`;

export const img = css`
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;

  @media all and (max-width: 1200px) {
    max-height: 300px;
  }
`;

export const description = css`
  padding: 34px 29px 0 29px;
  display: flex;
  align-items: center;

  @media all and (max-width: 778px) {
    padding: 20px 0 0 0;
    flex-direction: column;
    align-items: flex-start;
  }

  @media all and (max-width: 600px) {
    padding: 0px;
  }
`;

export const name = css`
  font-size: 40px;
  margin-right: 20px;
  font-family: ${v.ProximaNovaBold};
  color: #000;

  @media all and (max-width: 778px) {
    font-size: 30px;
  }

  @media all and (max-width: 600px) {
    font-size: 23px;
  }
`;

export const time = css`
  opacity: 0.5;
  font-size: 16px;
  color: #000000;
  font-family: ${v.HelveticaNeueBold};
`;
