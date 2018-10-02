import React from 'react';
import styled from 'styled-components';
import InfoPresenter from './Info';
import AgendaPresenter from './Agenda';
import ArticlePresenter from './Article';

const Grid = styled.main`
  display: grid;
  grid-template-areas: '. agenda article info .';
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  padding-top: 50px;
  grid-template-rows: 1000px;
  width: 100vw;

  @media (max-width: 850px) {
    display: grid;
    grid-template-areas:
      'article'
      'agenda'
      'info';
    grid-template-columns: 1fr;
    grid-template-rows: 500px 500px 500px;
    padding-top: 50px;

    & > {
      display: flex;
      justify-content: space-around;
    }
  }
`;

const GridPresenter: React.SFC<any> = () => (
  <Grid>
    <ArticlePresenter />
    <AgendaPresenter />
    <InfoPresenter />
  </Grid>
);
export default GridPresenter;
