import { css } from 'emotion'
import * as v from '../../AppStyles/variables'

export const projects = css`
  padding-top: 120px;
`

export const projects_list = css`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  display: grid;
`

export const projects_item__link = css`
  text-decoration: none;
`

export const projects_list__item = css`
  width: 100%;
  height: 100%;
  max-width: 555px;
  margin-bottom: 62px;

  &:nth-of-type(2n) {
    margin-top: 85px;
  }
`

export const image_container = css`
  height: 347px;
  border-radius: 10px;
  overflow: hidden;
`

export const img = css`
  height: 100%;
  width: 100%;

  @media all and (max-width: 1200px) {
    max-height: 300px;
  }
`

export const description = css`
  padding: 37px 29px 0 29px;
  display: flex;
  align-items: center;
`

export const name = css`
  font-size: 40px;
  margin-right: 20px;
  font-family: ${v.ProximaNovaBold};
  color: #000;
`

export const time = css`
  opacity: 0.5;
  font-size: 16px;
  color: #000000;
  font-family: ${v.HelveticaNeueBold};
`
