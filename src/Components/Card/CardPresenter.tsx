import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';

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

const CardPresenter = ({ imgURL }) => (
  <>
    <Card>
      <ThumbnailWraper>
        <Thumbnail src={imgURL} />
      </ThumbnailWraper>

      <Contents>
        <Avatar />
        <CoverLetter>
          <UserName>한지훈</UserName>
          <Title>첫계획표에요 우하하</Title>
          <Info>
            2018년 10월 7일 월요일
            <Dot />
            5개의 응원
          </Info>
        </CoverLetter>
        <Content>
          작년 겨울부터 오픈소스에 관심이 생겨 이곳저곳에 이슈도 올리고 풀
          리퀘스트도 보내고 있다. 오픈소스 기여의 가장 큰 장점은 남의 코드를
          많이 읽을 수 있다는 점과 기술 트렌드를 계속 확인할 수 있다는 점이다.
          그리고 영작 실력도 미세하게 (...) 향상된 것 같다. 작년 겨울부터
          오픈소스에 관심이 생겨 이곳저곳에 이슈도 올리고 풀 리퀘스트도 보내고
          있다. 오픈소스 기여의 가장 큰 장점은 남의 코드를 많이 읽을 수 있다는
          점과 기술 트렌드를 계속 확인할 수 있다는 점이다. 그리고 영작 실력도
          미세하게 (...) 향상된 것 같다.
        </Content>
      </Contents>
    </Card>
  </>
);

export default CardPresenter;
