import React from 'react';
import styled from '../../typed-components';

import Separator from 'src/Components/Separator';
import Avatar from 'src/Components/Avatar';

const UserInfo = styled.div`
  padding: 1rem;
  height: 100px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
`;
const UserName = styled.div`
  font-weight: 900;
  color: #212529;
  align-self: flex-end;
  margin-left: 70px;
`;

const UserComment = styled.div`
  margin-top: 5px;
  font-size: 13px;
  font-weight: 700;
  color: #868e96;
  align-self: flex-end;
  margin-left: 70px;
`;

const Comment = styled.div`
  padding: 1rem;
  font-size: 15px;
`;

const Info = styled.div`
  padding: 1rem;
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
const Container = styled.div`
  padding: 0;
  width: 95vw;
`;

const CommentComponent: React.SFC<any> = () => (
  <Container>
    <UserInfo>
      <Avatar top="0" right="0" />
      <UserName>한지훈</UserName>
      <UserComment>하얀손까만마음입니다.</UserComment>
    </UserInfo>
    <Comment>
      와 sass랑 svg! 애니메이션 같은 부분에 더 편하게 적용하는 법
      고민해봐야겠어요. 다른 업데이트 내용도 와닿게 더 많이 만들어 봐야겠다는
      생각도 드네요ㅎㅎ
    </Comment>

    <Info>
      2018년 10월 7일 월요일
      <Dot />
      5개의 응원
    </Info>
    <Separator />
  </Container>
);
export default CommentComponent;
