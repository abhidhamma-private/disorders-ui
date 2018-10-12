import React from 'react';
import styled from 'styled-components';

import CommonContainer from '../../Components/Common';
import Grid from '../../Components/Grid';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

const localizer = BigCalendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(BigCalendar);

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
`;

class CheckPlanPresenter extends React.Component<{}, any> {
  public state = {
    events: [
      {
        start: new Date(),
        end: new Date(
          moment()
            .add(1, 'days')
            .toDate()
        ),
        title: 'Some title',
      },
    ],
  };

  public onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  public onEventDrop = ({ event, start, end, allDay }) => {
    alert(start);
  };

  public render() {
    const headerTheme = false;
    return (
      <>
        <CommonContainer headerTheme={headerTheme} />
        <Grid />
        <Container>
          <DnDCalendar
            selectable={true}
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="day"
            toolbar={false}
            events={this.state.events}
            onEventDrop={this.onEventDrop}
            onEventResize={this.onEventResize}
            resizable="true"
            style={{ height: '100vh' }}
          />
        </Container>
      </>
    );
  }
}
export default CheckPlanPresenter;
