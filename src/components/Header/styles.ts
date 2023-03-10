import styled from "styled-components";


export const Wrapper = styled.div`
  width: 100%;
  height:75px;
  max-height:75px;
  background: ${props => props.theme.colors.primary};
  a{
    text-decoration:none;
  }
`

export const ContentBox = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  padding: ${props => props.theme.spacings.xsmall} 0;
`

export const Logo = styled.h2`
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.font.bold};
  font-size: ${props => props.theme.font.sizes.large};
`