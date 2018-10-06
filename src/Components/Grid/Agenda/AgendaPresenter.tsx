import React from 'react';
import styled from 'styled-components';

const Agenda = styled.div`
  font-size: 50px;
  background: rgb(241, 243, 245);
  text-align: center;
  grid-area: agenda;
`;

const AgendaPresenter: React.SFC<any> = () => <Agenda>Agenda</Agenda>;
export default AgendaPresenter;
