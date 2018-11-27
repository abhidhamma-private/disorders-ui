import React from 'react';
import CommonContainer from '../../Components/Common';
import styled from 'styled-components';
import Separator from 'src/Components/Separator';
import Avatar from 'src/Components/Avatar';
import CommentComponent from 'src/Components/Comment';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);

const Plan = styled.div`
  margin-top: 50px;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-template-areas:
    '. Head .'
    '. Content .'
    '. Comment .';
  @media (max-width: 850px) {
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr 1fr;
    grid-template-areas:
      'Head'
      'Content'
      'Comment';
  }
`;

const Head = styled.div`
  grid-area: Head;
  background: white;
`;

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

const Title = styled.div`
  padding: 1rem;
  font-weight: 900;
  font-size: 25px;
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

const Content = styled.div`
  display: grid;
  grid-area: Content;
  background: white;
  align-content: space-between;
  grid-template-rows: 1fr;
`;
const ContentBox = styled.div`
  padding: 1rem;
`;
const Comment = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  grid-area: Comment;
  background: white;
`;
const WriteComment = styled.textarea`
  display: block;
  height: 70px;
  resize: none;
  outline: none;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  justify-self: center;
  width: 95vw;
  font-size: 15px;
  z-index: 10;
`;
const CommentBox = styled.div`
  padding: 1rem;
`;
class PlanPresenter extends React.Component<any, any, any> {
  public render() {
    const headerTheme = 'main';
    console.log('플랜프레젠터');
    console.log(this.props.data.GetPlan.plan);

    return (
      <>
        <CommonContainer headerTheme={headerTheme} />
        <Plan>
          <Head>
            <UserInfo>
              <Avatar
                top="0"
                right="0"
                avatar={this.props.data.GetPlan.plan.user.avatar}
              />
              <UserName>{this.props.data.GetPlan.plan.user.nickName}</UserName>
              <UserComment>{this.props.data.GetPlan.plan.comment}</UserComment>
            </UserInfo>
            <Title>{this.props.data.GetPlan.plan.title}</Title>

            <Info>
              <Dot />
              5개의 응원
            </Info>
            <Separator />
          </Head>

          <Content>
            <ContentBox>
              <BigCalendar
                events={(() => {
                  console.log('events');
                  console.log(this.props.data);

                  const eventData = this.props.data.GetPlan.plan.detailPlans;

                  const events: any = [];

                  // tslint:disable
                  for (var i in eventData) {
                    const formattedEvent = {
                      id: eventData[i].detailPlanId,
                      start: new Date(eventData[i].startTime),
                      end: new Date(eventData[i].endTime),
                      allDay: eventData[i].allDay,
                    };
                    events.push(formattedEvent);
                  }

                  console.log(events);
                  return events;
                })()}
                toolbar={false}
                localizer={localizer}
                defaultView={BigCalendar.Views.WEEK}
                style={{
                  background: 'white',
                }}
              />
            </ContentBox>
            <Separator />
          </Content>

          <Comment>
            <WriteComment placeholder="응원해주기" />
            <CommentBox>
              <CommentComponent />
            </CommentBox>
          </Comment>
        </Plan>
      </>
    );
  }
}
export default PlanPresenter;
