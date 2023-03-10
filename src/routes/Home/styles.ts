import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.primary} ;
  width:100%;
  min-height:100vh;
`

export const Content = styled.div`
  width:100%;
  max-width:980px;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  align-items:center;
  justify-content:space-around;
  flex-wrap:wrap;
`

export const BoxLoading = styled.div`
  width: 100% ;
  height: 85vh;
  display:flex ;
  align-items:center;
  justify-content: center;
`
