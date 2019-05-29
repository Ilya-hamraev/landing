import { css } from 'emotion'
import * as v from '../../AppStyles/variables'

export const header = css`
  padding-top: 202px;
  position: relative;
`
export const header_logo = css`
  position: absolute;
  left: -103px;
  top: 41px;
  cursor: pointer;
  font-size: 30px;
  color: #000000;
  text-decoration: none;
  font-family: ${v.DINProBold};
`

export const contacts = css`
  position: absolute;
  right: -100px;
  top: 49px;
  cursor: pointer;
  font-size: 14px;
  color: #0f0e0e;
  text-decoration: none;
  font-family: ${v.HelveticaNeueBold};

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: -3px;
    bottom: -4px;
    height: 2px;
    background: #eaeaea;
  }
`

export const header_title = css`
  font-size: 80px;
  color: #000000;
  line-height: 1;
  font-family: ${v.ProximaNovaBold};

  span {
    position: relative;
    z-index: 1;
    color: #fff;

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 77px;
      background: #f74235;
      top: 15px;
      left: 0;
      z-index: -1;
    }
  }
`

export const header_nav = css`
  margin-top: 89px;
  display: flex;
  flex-wrap: wrap;
`

export const header_nav_item = css`
  margin-right: 44px;
  font-size: 16px;
  color: #000;
  font-family: ${v.HelveticaNeueBold};
`
