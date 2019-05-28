import {css} from 'emotion'

export const header = css`
    padding-top: 202px;
    position: relative;
`
export const header_logo = css`
    position: absolute;
    left: -60px;
    top: 47px;
    cursor: pointer;
    font-size: 30px;
    color: #000000;
    text-decoration: none;
` 

export const contacts = css`
    position: absolute;
    right: -60px;
    top: 47px;
    cursor: pointer;
    font-size: 14px;
    color: #0f0e0e;
    text-decoration: none;
`

export const header_title = css`
    font-size: 80px;
    color: #000000;
    line-height: 1;

    span {
        background: #F74235;
        color: #fff;
    }
`

export const header_nav = css`
    margin-top: 87px;
    display: flex;
    flex-wrap: wrap;
`

export const header_nav_item = css`
    margin-right: 42px;
    font-size: 16px;
    color: #000;
`