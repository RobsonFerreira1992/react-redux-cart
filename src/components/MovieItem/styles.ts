import styled from "styled-components";
import media from 'styled-media-query';

export const Wrapper = styled.div`
  -webkit-box-pack: justify;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 8px 8px 16px;
  background:#fff ;

${media.greaterThan('small')`
  display: flex;
`}
`
export const MovieContent = styled.div`
  display: flex;
  width: 100%;
 
  align-items: center;
  ${media.lessThan('small')`
    flex-wrap:wrap;
    max-width:140px;
  `}
`
export const ImageBox = styled.div`
    margin-right: 1.2rem;
    
    display: flex;
    align-items: center;
    
    img {
      width: 100%;
      object-fit: cover;
      ${media.lessThan('small')`
        width: 100%;
      `}
    }
    ${media.greaterThan('small')`
      margin-right: ${props => props.theme.spacings.xsmall};
      width: 15rem;
    `};


  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex:2 ;
  justify-content: center;
  ${media.lessThan('small')`
    flex-direction: column;
    align-items: center;
    
  `}
`
export const ContentQuant = styled.div`
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-basis: 18%;
    text-align: center;
    padding-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.lessThan('small')`
      padding-top: 10px;
    `}
  .content-q{
    -webkit-box-align: center;
    display: inline-flex;
    font-size: 14px;
    color: rgb(108, 108, 108);
    min-width: 120px;
    align-items: center;
    z-index: 2;
    padding-bottom: 3px;
    position: relative;
    .remove-items{
      background:transparent ;
      border:none ;
      cursor:pointer ;
    }

    .input-q{
      -webkit-box-pack: justify;
      -webkit-box-align: center;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      width: 100%;
      height: 30px;
      max-width: 60px;
      text-align: center;
      vertical-align: middle;
      border-image: initial;
      background: rgb(255, 255, 255);
      color: rgb(108, 108, 108);
      justify-content: space-around;
      max-height: 22px;
      border-width: 1px 0px;
      border-top-style: solid;
      border-top-color: rgb(231, 231, 231);
      border-bottom-style: solid;
      border-bottom-color: rgb(231, 231, 231);
      border-left-style: initial;
      border-left-color: initial;
      border-right-style: initial;
      border-right-color: initial;
      transition: background 300ms ease 0s;
      margin: 0 20px;
    }
    .add-items{
      background:transparent ;
      border:none ;
      cursor:pointer ;
    } 
}
`
export const Title = styled.h3`
    font-size: ${props => props.theme.font.sizes.small};
    line-height:1.5;
    font-weight: ${props => props.theme.font.bold};
    color: ${props => props.theme.colors.black};
    margin-bottom: ${props => props.theme.spacings.xxsmall};
    ${media.greaterThan('small')`
      font-size: 2rem;
      line-height: 2rem;
    `};
    ${media.lessThan('small')`
      margin-bottom: 0;
      font-size: 2.2rem;
    `};

    
  
`
export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const Remove = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.font.sizes.small};
`
export const Price = styled.div`
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.font.sizes.medium};
    font-weight: ${props => props.theme.font.bold};
    ${media.lessThan('small')`
      margin-top:10px;
      font-size: 2.2rem;
    `};
`
export const DownloadLink = styled.a`
  color: ${props => props.theme.colors.primary};
  margin-left: ${props => props.theme.spacings.xxsmall};
  
`
export const PaymentContent = styled.div`
  
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.font.sizes.small};
    display: flex;
    flex-direction: column;
    min-width: 28rem;
    margin-top: ${props => props.theme.spacings.xsmall};

    ${media.greaterThan('small')`
      margin-top: 0;
      flex: 1;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
    `}
  
`

export const CartInfo = styled.div`
  
    display: flex;
    align-items: center;

    span {
      margin-right: ${props => props.theme.spacings.xxsmall};
    }

    ${media.lessThan('small')`
      margin-top: ${props => props.theme.spacings.xsmall};
    `}

`

export const SubTotal = styled.div`
  -webkit-box-align: center;
    -webkit-box-flex: 1;
    display: flex;
    flex-grow: 1;
    flex-basis: 18%;
    text-align: center;
    align-items: center;
    padding-top: 32px;
    ${media.lessThan('small')`
      padding-top: 10px;
    `}
    div{
      display: flex;
      flex: 1 1 auto;
      height: 36px;
      align-items: center;
      justify-content: space-around;
      p{
        font-size: ${props => props.theme.font.sizes.medium};
        color: ${props => props.theme.colors.primary};
        font-weight: ${props => props.theme.font.bold};

      }
    }
`
export const SubRemove = styled.div`
  -webkit-box-align: center;
    -webkit-box-flex: 1;
    display: flex;
    flex-grow: 1;
    flex-basis: 18%;
    text-align: center;
    align-items: center;
    padding-top: 32px;
    justify-content: end;
    ${media.lessThan('small')`
      padding-top: 10px;
    `}
    div{
      display: flex;
      flex-flow: column nowrap;
      height: 36px;
      button{
        border:none ;
        background: transparent;
        cursor:pointer ;
      }
      p{
        font-size: ${props => props.theme.font.sizes.medium};
        color: ${props => props.theme.colors.primary};
        font-weight: ${props => props.theme.font.bold};

      }
    }
`