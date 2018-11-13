import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  font-size: 20px;
  text-align: center;
  background: rgb(241, 243, 245);
  grid-area: info;
`;

const Img = styled.div`
  width: 350px;
  height: 350px;
  background-size: cover;
  background: url('https://emoticonstudio.kakao.com/assets/thumb_start2-904c6e38039661b08cb4eaff7a8b283b711e206c9f1ee7542d25a83f95e9ef93.png')
    0px 110px;
  background-repeat: no-repeat;
  background-size: contain;
  /* &::before {
    content: '나와 같은 목표를 가진사람?';
    font-weight: 900;
    display: block;
  } */
`;

const InfoPresenter: React.SFC<any> = () => (
  <Info>
    <Img />
  </Info>
);
export default InfoPresenter;
