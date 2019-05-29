import { css } from 'emotion'
import * as v from '../../AppStyles/variables'

export const projects = css`
  padding-top: 120px;
`

export const projects_list = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const projects_list__item = css`
  width: 100%;
  height: 100%;
  max-width: 555px;
  max-height: 347px;
  margin-bottom: 126px;

  &:nth-of-type(2n) {
    margin-top: 68px;
  }
`

export const image_container = css``

export const img = css``

export const description = css`
  padding: 30px 29px 0 29px;
  display: flex;
  align-items: center;
`

export const name = css`
  font-size: 40px;
  margin-right: 20px;
  font-family: ${v.ProximaNovaBold};
`

export const time = css`
  opacity: 0.5;
  font-size: 16px;
  color: #000000;
  font-family: ${v.HelveticaNeueBold};
`