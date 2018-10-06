import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: grid;
  grid-template-rows: 11fr 9fr;
  grid-template-columns: 1fr;
  border-radius: 15px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  height: 80vh;
  background: white;
`;

const ThumbnailWraper = styled.div`
  width: 100%;
  position: relative;
  display: block;
`;

const Thumbnail = styled.img`
  background: #dee2e6;
  -o-object-fit: cover;
  object-fit: cover;
  display: block;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
  grid-template-columns: 1fr;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.05);
`;

const Title = styled.div`
  border-bottom: 1px solid #e9ecef;
  margin-top: 57px;
`;

const Content = styled.div`
  margin-top: 1.5rem;
  color: #4c657d;
`;

const CardPresenter = ({ imgURL }) => (
  <>
    <Card>
      <ThumbnailWraper>
        <Thumbnail src={imgURL} />
      </ThumbnailWraper>

      <Contents>
        <Title>제목</Title>
        <Content>소개</Content>
      </Contents>
    </Card>
  </>
);

export default CardPresenter;
