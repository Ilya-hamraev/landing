import { css } from "emotion";
import * as v from "../../AppStyles/variables";

export const amenities = css`
  margin-top: 118px;
`;

export const amenities_list = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 82px 27px;

  @media all and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 27px 27px;
  }
`;

export const amenities_list_item = css`
  position: relative;

  @media all and (max-width: 600px) {
    text-align: center;
  }
`;

export const title = css`
  margin-bottom: 11px;
  font-size: 40px;
  line-height: 1.25;
  color: #000000;
  font-family: ${v.ProximaNovaBold};

  @media all and (max-width: 1050px) {
    font-size: 32px;
  }

  @media all and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const description = css`
  max-width: 375px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.7);
  font-family: ${v.HelveticaNeueMedium};

  @media all and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const contacts = css`
  background: url(${require("../../assets/image/content/placeholder.svg")})
    center center no-repeat;
  background-position-x: 0px;
  background-position-y: -15px;
  height: 200px;

  position: relative;

  color: #ffffff;
  line-height: 1.5;
  font-family: ${v.HelveticaNeueMedium};

  &:after {
    content: "";
    left: 27px;
    position: absolute;
    bottom: 25px;
    display: inline-block;
    width: 7px;
    height: 7px;
    background: url(${require("../../assets/image/content/combined-shape.svg")})
      center center no-repeat;

    @media all and (max-width: 600px) {
      display: none;
    }
  }

  p {
    position: absolute;
    left: 75px;
    top: 55px;

    @media all and (max-width: 778px) {
      left: 46px;
      top: 39px;
    }

    @media all and (max-width: 600px) {
      left: 50%;
      transform: translateX(-50%);
    }

    a {
      position: relative;
      cursor: pointer;
      color: #fff;
      font-family: ${v.HelveticaNeueMedium};
      text-decoration: none;

      &:after {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        bottom: -3px;
        height: 1px;
        background: #fff;
        opacity: 0.7;
      }
    }
  }

  @media all and (max-width: 778px) {
    max-width: 100%;
    background-size: contain;
  }

  @media all and (max-width: 600px) {
    background-position-x: 50%;
    transfrom: translateY(-50%);
  }
`;

export const custom_bg = css`
  position: absolute;
  left: 0;
  right: 4000px;
  height: 100%;
  width: 4000px;
  background: url(${require("../../assets/image/content/dot-grid.svg")});
  opacity: 0.2;
`;
