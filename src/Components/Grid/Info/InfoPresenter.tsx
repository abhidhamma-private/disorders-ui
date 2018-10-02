import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  font-size: 50px;
  background-color: #1abc9c;
  grid-area: info;
`;

const InfoPresenter: React.SFC<any> = () => <Info />;
export default InfoPresenter;
