

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.primary};
  max-width: ${(props) => props.theme.grid.container};
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(${(props) => props.theme.grid.gutter} / 2);
  padding-right: calc(${(props) => props.theme.grid.gutter} / 2);
`;