import styled from "styled-components";
import media from "styled-media-query";



export const Wrapper = styled.div`
    background: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;
    padding:${props=> props.theme.spacings.small};
    border-radius: 5px;
    ${media.lessThan('medium')`
      min-height: 85vh;
      align-items: center;
      justify-content: space-between;
      padding:${props=> props.theme.spacings.xsmall};
    `}
`

export const Footer = styled.div`
  background: ${ props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.font.bold};
  font-size: ${props => props.theme.font.sizes.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${ props => props.theme.colors.lightGray};
  padding:${props=> props.theme.spacings.small} 0 ;
  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    width: 100%;
    padding:${props=> props.theme.spacings.xsmall} 0 0 0;
  `}
`

export const Total = styled.p`
  color: ${props=> props.theme.colors.primary};
  font-size: ${props => props.theme.font.sizes.xlarge};

`

export const BoxTotal = styled.div`
  display:flex;
  align-items:center;
  span{
    font-size: ${props => props.theme.font.sizes.small};
    color: ${props => props.theme.colors.lightGray};
    ${media.lessThan('medium')`
      margin:0 10px;
    `}
  }
  ${media.lessThan('medium')`
    width: 100%;
    justify-content: end;
    margin-bottom:5px;
  `}
`
export const BoxDescription = styled.div`
  display:flex;
  width:100%;
  font-size: ${props => props.theme.font.sizes.small};
  color: ${props => props.theme.colors.lightGray};
  font-weight: ${props=> props.theme.font.bold};
  text-transform:uppercase;
  ${media.lessThan('medium')`
    display:none;
  `}
  .title-produto{
    flex-grow: 1.5;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .title-qtd{
    flex-grow: 1.5;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    
  }
  .title-subtotal{
    flex-grow: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;

  }
  .title-exclusao{
    flex-grow: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
`