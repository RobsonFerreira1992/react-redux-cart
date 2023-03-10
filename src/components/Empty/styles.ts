import styled from 'styled-components';
import media from 'styled-media-query';


export const Wrapper = styled.div`
  background: ${props => props.theme.colors.white};
  width:100%;
  height: 700px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding: 15rem;
  ${media.lessThan('medium')`
    padding: 10px;
    text-align: center;
  `}
  h1{
    color: ${props => props.theme.colors.primary};
  }
  a{
    text-decoration:none;
  }
`

export const BoxContentImg = styled.div`
  margin-bottom: 20px;
 
`