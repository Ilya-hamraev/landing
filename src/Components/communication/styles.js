import { css } from 'emotion'
import * as v from '../../AppStyles/variables'

export const communication = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 210px;

  @media all and (max-width: 600px) {
    margin-bottom: 100px;
    grid-template-columns: 1fr;
  }
`

export const img_box = css`
  position: relative;

  &:after {
    content: '';
    left: -157px;
    position: absolute;
    bottom: -126px;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(${require('../../assets/image/content/force.svg')})
      center center no-repeat;

    @media all and (max-width: 778px) {
      display: none;
    }
  }

  &:before {
    content: '';
    right: -173px;
    position: absolute;
    top: -42px;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(${require('../../assets/image/content/like.svg')})
      center center no-repeat;

    @media all and (max-width: 778px) {
      display: none;
    }
  }
`

export const image_contact = css`
  
`

export const title = css`
  font-size: 40px;
  letter-spacing: normal;
  color: #000000;
  margin-bottom: 37px;
  font-family: ${v.ProximaNovaBold};
`

export const contact = css`
  font-size: 16px;
  line-height: 1.5;
  color: #000000;
  font-family: ${v.HelveticaNeueMedium};

  a {
    position: relative;
    cursor: pointer;
    color: #000000;
    font-family: ${v.HelveticaNeueMedium};
    text-decoration: none;

    &:after {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      bottom: -3px;
      height: 2px;
      background: #000;
    }
  }
`

export const about = css`
  margin-bottom: 40px;
  font-family: ${v.ProximaNovaBold};
`

export const about_title = css`
  font-size: 18px;
  line-height: 1.22;
  color: #000000;
  margin-bottom: 10px;
  font-family: ${v.ProximaNovaBold};
`

export const about_text = css`
  font-family: ${v.HelveticaNeueMedium};
  max-width: 486px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.7);

  @media all and (max-width: 600px) {
    max-width: 100%;
  }
`

export const contacts = css`
  @media all and (max-width: 600px) {
    text-align: center;
  }
`
