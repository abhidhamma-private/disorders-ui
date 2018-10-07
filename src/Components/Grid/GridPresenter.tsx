import React from 'react';
import styled from 'styled-components';

const Grid = styled.main`
  display: grid;
  grid-template-areas: '. agenda article info .';
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  padding-top: 50px;
  grid-gap: 5px;
  grid-template-rows: auto;
  width: 100vw;

  @media (max-width: 850px) {
    display: grid;
    grid-template-areas:
      'article'
      'agenda'
      'info';
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding-top: 50px;
    grid-gap: 5px;
    & > {
      display: grid;
      justify-content: space-around;
    }
  }
`;

const GridPresenter: React.SFC<any> = () => <Grid />;
export default GridPresenter;
