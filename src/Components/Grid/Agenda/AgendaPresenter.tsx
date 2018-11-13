import React from 'react';
import styled from 'styled-components';

const Agenda = styled.div`
  font-size: 20px;
  background: rgb(241, 243, 245);
  text-align: center;
  grid-area: agenda;
  display: grid;
`;
const Img = styled.div`
  width: 350px;
  height: 350px;
  background: url('https://i.ytimg.com/vi/Boe5Q5_ur1M/maxresdefault.jpg') -100px
    0px;
  background-size: cover;
  /* &::before {
    content: '열심히 하고 있는 사람';
    font-weight: 900;
    display: block;
    line-height: 17px;
  } */
`;
const AgendaPresenter: React.SFC<any> = () => (
  <Agenda>
    <Img />
  </Agenda>
);
export default AgendaPresenter;
