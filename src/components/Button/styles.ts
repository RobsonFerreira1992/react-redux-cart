import styled, { css } from 'styled-components'
import media from 'styled-media-query'
export type WrapperProps = {
  hasIcon?: boolean,
  size?: string,
  add?: boolean
}  

const wrapperModifiers = {
  small: () => css`
    width: 180px;
    font-size: ${props => props.theme.font.sizes.xsmall};
  `,
  medium: () => css`
    width: 280px;
    font-size: ${props => props.theme.font.sizes.small};
    padding: ${props => props.theme.spacings.xsmall} ${props => props.theme.spacings.small};
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${props => props.theme.spacings.xxsmall};
      }
    }
  `,
  add:() => css`
    background:${props=> props.theme.colors.secondary} ;
  `,
  added:() => css`
    background:${props=> props.theme.colors.green} ;
  `
}

export const Wrapper = styled.button<WrapperProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${props => props.add ? wrapperModifiers.added() : wrapperModifiers.add()};
    color: ${props => props.theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${props => props.theme.border.radius};
    padding: ${props => props.theme.spacings.xxsmall};
    text-decoration: none;
    font-weight: ${props => props.theme.font.bold};
    font-size: ${props => props.theme.font.sizes.xsmall};
    ${props => props.size === 'small' ? wrapperModifiers.small() : wrapperModifiers.medium() };
    ${props => props.hasIcon  && wrapperModifiers.withIcon()}
    ${media.lessThan('medium')`
      width:100%;
    `}
    span{
      font-size: ${props => props.theme.font.sizes.xsmall};
      margin: 0 5px;
      display:flex;
      align-items:center;
    }
  
`
