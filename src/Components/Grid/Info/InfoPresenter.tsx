import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  font-size: 50px;
  text-align: center;
  background: rgb(241, 243, 245);
  grid-area: info;
`;

const InfoPresenter: React.SFC<any> = () => <Info>Info</Info>;
export default InfoPresenter;
