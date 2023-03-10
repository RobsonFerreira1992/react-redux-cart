import styled from "styled-components";


export const Wrapper = styled.div``

export const ContentBox = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
  div{
  text-align: right;
  margin:2px;
  h4{
    font-size: ${props => props.theme.font.sizes.small};
    color: ${props => props.theme.colors.white};
  }
  p{
      color: ${props => props.theme.colors.lightGray};
      font-size: ${props => props.theme.font.sizes.xsmall};
  }
  img{
    width:auto;
  }
  
  }
`