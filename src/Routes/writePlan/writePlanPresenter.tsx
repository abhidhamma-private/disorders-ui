import React from 'react';
import styled from 'styled-components';

import CommonContainer from '../../Components/Common';
import Grid from '../../Components/Grid';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';

const localizer = BigCalendar.momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

const Container = styled.div`
  position: fixed;
  margin-top: 10px;
  height: 100vh;
  width: 100vw;
`;

class WritePlanPresenter extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      // tslint:disable-next-line
      events: [],
    };

    this.moveEvent = this.moveEvent.bind(this);
    this.newEvent = this.newEvent.bind(this);
  }

  private moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    // tslint:disable-next-line
    const { events } = this.state;

    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents,
    });

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  private resizeEvent = ({ event, start, end }) => {
    // tslint:disable-next-line
    const { events } = this.state;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents,
    });

    // alert(`${event.title} was resized to ${start}-${end}`)
  };

  private newEvent(event) {
    // tslint:disable
    const title = window.prompt('New Event name');

    let hour = {
      title: title,
      start: event.start,
      end: event.end,
      allDay: event.slots.length == 1,
    };
    console.log('this.state.events');
    console.log(this.state.events);

    this.setState({
      events: this.state.events.concat([hour]),
    });
  }

  // tslint:disable-next-line
  render() {
    const headerTheme = 'write';
    const addPlanVeriable = (() => {
      return {
        thumbnail: this.state.thumbnail
          ? this.state.thumbnail
          : 'https://images.velog.io/post-images/maemi/8f34a060-c487-11e8-9e37-7d7c50d08616/benjaminchild15826.jpg',
        writer: this.state.writer ? this.state.writer : '익명',
        title: this.state.title ? this.state.title : '익명의 계획표',
        avatar: this.state.avatar
          ? this.state.avatar
          : 'https://www.surfaceinside.de/wp-content/uploads/blog_WindowsHello.jpg',
        content: this.state.content ? this.state.content : '',
        text: this.state.text ? this.state.text : '',
        image: this.state.image ? this.state.image : '',
        detailPlans: (() => {
          console.log('있냐/ 있냐!!!');

          console.log(this.state);
          console.log('state');
          console.log(this.props);

          //이거 보여주려는게 아니라 추가하려는 모양이다.
          //state.events 받아와서 setsate로 추가해줘야할듯 하다..
          const { events: oldEvents } = this.state;
          console.log('oldEvents');
          console.log(oldEvents);
          let newEvents: any = { detailPlans: [] };
          oldEvents.map(event => {
            const {
              title: planName,
              start: startTime,
              end: endTime,
              allDay,
            } = event;
            // tslint-disable
            let newObject = { planName, startTime, endTime, allDay };
            console.log('newObject');
            console.log(newObject);
            newEvents.detailPlans = newEvents.detailPlans.concat(newObject);
            console.log('oldEvents');
            console.log(oldEvents);
          });
          return newEvents.detailPlans;
        })(),
      };
    })();

    return (
      <>
        <CommonContainer
          headerTheme={headerTheme}
          addPlanVeriable={addPlanVeriable}
        />
        <Grid />
        <Container>
          <DragAndDropCalendar
            toolbar={false}
            selectable={true}
            localizer={localizer}
            events={this.state.events}
            onEventDrop={this.moveEvent}
            resizable={true}
            onEventResize={this.resizeEvent}
            onSelectSlot={this.newEvent}
            defaultView={BigCalendar.Views.WEEK}
            style={{
              background: 'white',
            }}
          />
        </Container>
      </>
    );
  }
}
export default WritePlanPresenter;
