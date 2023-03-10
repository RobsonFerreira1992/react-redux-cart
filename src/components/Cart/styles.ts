import styled from 'styled-components'


export const Cart = styled.div`
  width: 100%;
  max-width:310px;
  padding: ${props => props.theme.spacings.xsmall};
  background: ${props => props.theme.colors.white};
  border-radius:4px;
  margin: 5px;
`

export const ContentBox = styled.div`
  display:flex;
  align-items:center;
  flex-direction: column;
`

export const BoxImage = styled.div`
  margin-bottom:10px;
  max-width:150px;

  img{
    width:100% ;
  }
`

export const BoxDescribe = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.p`
  font-size:${props=> props.theme.font.sizes.small};
  font-weight:${props => props.theme.font.bold};
  color: ${props => props.theme.colors.textTitle};
`

export const Price = styled.p`
  margin: 10px 0;
  font-size:${props=> props.theme.font.sizes.medium};
  font-weight:${props => props.theme.font.bold};
  color: ${props => props.theme.colors.textTitle};
`

