import styled from 'styled-components'


export const Loading = styled.div`
  animation: is-rotating 1s infinite;
  border: 6px solid${props => props.theme.colors.lightGray};
  border-top-color: ${props => props.theme.colors.white};
  height:50px;
  width:50px;
  border-radius: 50%;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`