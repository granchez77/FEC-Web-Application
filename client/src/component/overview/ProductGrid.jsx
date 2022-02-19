import styled from 'styled-components';
import { Container } from '../../GlobalStyle';

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.12fr 1fr;
  grid-gap: 0.25rem;
  color: red;
  grid-template-areas:
    "main sidebar"
    "main sidebar2"
`;

export const Main = styled.main`
  background: grey;
  color: black;
  grid-area: main;
  padding: 0.25rem;
`;

export const SideBar = styled.div`
  background: white;
  color: black;
  grid-area: sidebar;
  padding: 0.25rem;
`;

export const SideBar2 = styled.div`
  background: white;
  color: black;
  grid-area: sidebar2;
  padding: 0.25rem;
`;