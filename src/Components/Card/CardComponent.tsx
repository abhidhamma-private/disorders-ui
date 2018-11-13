import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom';
import moment from 'moment';
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
  position: relative;
  display: grid;
  grid-template-rows: 3fr 2fr;
  grid-template-columns: 1fr;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.05);
  padding: 1rem 1rem;
  font-size: 18px;
`;

const CoverLetter = styled.div`
  border-bottom: 1px solid #e9ecef;
  display: grid;
  justify-content: flex-start;
  justify-items: flex-start;
  align-items: flex-start;
`;

const UserName = styled.div`
  font-weight: 900;
  color: #fa983a;
  align-self: flex-end;
`;

const Title = styled.div`
  margin-top: 5px;
  font-weight: 900;
  font-size: 25px;
`;

const Info = styled.div`
  color: #8aa6c1;
`;

const Dot = styled.span`
  &::before {
    color: #8aa6c1;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-weight: 900;
    content: '·';
  }
`;
const Content = styled.div`
  -webkit-box-orient: vertical;
  text-align-last: center;
  margin-top: 1.5rem;
  line-height: 1.5rem;
  height: 4.5rem;
  overflow-y: hidden;
  word-break: break-all;
  color: #4c657d;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`;

const CardComponent = ({
  thumbnail,
  avatar,
  writer,
  title,
  content,
  createdAt,
  href,
  planId,
  key,
}) => (
  <>
    <Card>
      <ThumbnailWraper>
        <Link to={`${href}/${planId}`}>
          <Thumbnail src={thumbnail} />
        </Link>
      </ThumbnailWraper>

      <Contents>
        <Avatar style={{ top: '-37px', right: '20px' }} avatar={avatar} />
        <CoverLetter>
          <UserName>{writer}</UserName>
          <Link to={`${href}/${planId}`}>
            <Title>{title}</Title>
          </Link>
          <Info>
            {moment(createdAt).format('YYYY년 MM월 DD일')}
            <Dot />
            5개의 응원
          </Info>
        </CoverLetter>
        <Content>{content}</Content>
      </Contents>
    </Card>
  </>
);

export default CardComponent;
