import React from 'react';
import styled from 'styled-components';

const Agenda = styled.div`
  font-size: 50px;
  background-color: #f1c40f;
  grid-area: agenda;
`;

const AgendaPresenter: React.SFC<any> = () => <Agenda>달성도</Agenda>;
export default AgendaPresenter;
