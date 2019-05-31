import { css } from 'emotion'
import * as v from '../../AppStyles/variables'

export const team = css`
  padding-top: 200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin-bottom: 100px;
`

export const team_list = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  position: relative;
`

export const team_list_item = css``

export const photo_box = css`
  margin-bottom: 21px;
  

  img {
    width: 165px;
    height: 200px;
  }
`

export const name = css`
  font-size: 18px;
  line-height: 1.22;
  color: #000000;
  margin-bottom: 5px;
  font-family: ${v.ProximaNovaBold};
`

export const position = css`
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  font-family: ${v.HelveticaNeueMediumItalic};
`

export const photo_box_teamLead = css`
  margin-bottom: 22px;
`

export const teamLeader = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`

export const title = css`
  margin-bottom: 26px;
  font-size: 50px;
  line-height: 1;
  color: #000000;
  font-family: ${v.ProximaNovaBold};
`

export const description = css`
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.7);
  font-family: ${v.HelveticaNeueMedium};
`
