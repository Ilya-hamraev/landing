import { css } from 'emotion'
import * as v from '../../AppStyles/variables'

export const amenities = css`
  margin-top: 80px;
`

export const amenities_list = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 82px 27px;
`

export const amenities_list_item = css`
  position: relative;
`

export const title = css`
  margin-bottom: 11px;
  font-size: 40px;
  line-height: 1.25;
  color: #000000;
  font-family: ${v.ProximaNovaBold};
`

export const description = css`
  max-width: 375px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.7);
  font-family: ${v.HelveticaNeueMedium};
`

export const contacts = css`
  background: url(${require('../../assets/image/content/placeholder.svg')})
    center center no-repeat;
  background-position-x: 0px;
  background-position-y: -15px;
  height: 200px;

  position: relative;

  color: #ffffff;
  line-height: 1.5;
  font-family: ${v.HelveticaNeueMedium};

  &:after {
    content: '';
    left: 27px;
    position: absolute;
    bottom: 25px;
    display: inline-block;
    width: 7px;
    height: 7px;
    background: url(${require('../../assets/image/content/combined-shape.svg')})
      center center no-repeat;
  }

  p {
    position: absolute;
    left: 75px;
    top: 55px;

    a {
      position: relative;
      cursor: pointer;
      color: #fff;
      font-family: ${v.HelveticaNeueMedium};
      text-decoration: none;

      &:after {
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        bottom: -3px;
        height: 2px;
        background: #fff;
        opacity: 0.7;
      }
    }
  }
`

export const custom_bg = css`
  position: absolute;
  left: 0;
  right: 4000px;
  height: 100%;
  width: 4000px;
  background: url(${require('../../assets/image/content/dot-grid.svg')});
  opacity: 0.2;
`
