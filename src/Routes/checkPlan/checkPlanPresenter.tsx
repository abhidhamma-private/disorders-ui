import React from 'react';
import styled from 'styled-components';

import CommonContainer from '../../Components/Common';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

const localizer = BigCalendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(BigCalendar);

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 4fr;
  position: fixed;
  margin-top: 10px;
`;
const CheckBoxList = styled.div`
  display: grid;
  grid-template-rows: 41.4px repeat(25, 50px);
  align-items: center;
  justify-items: center;
  height: 1245.5px;
  background-color: rgb(234, 246, 256);
  > input {
    z-index: 1;
  }
`;

const TextBoxList = styled.div`
  display: grid;
  grid-template-rows: 41.4px repeat(25, 50px);
  align-items: center;
  justify-items: center;
  height: 1245.5px;
  background-color: rgb(234, 246, 256);
  > textarea {
    z-index: 1;
    width: 100%;
    height: 100%;
    resize: none;
  }
`;

class CheckPlanPresenter extends React.Component<{}, any> {
  public state = {
    events: [
      // {
      //   start: new Date(),
      //   end: new Date(
      //     moment()
      //       .add(1, 'days')
      //       .toDate()
      //   ),
      //   title: 'Some title',
      // },
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
    const headerTheme = 'check';
    return (
      <>
        <CommonContainer headerTheme={headerTheme} />
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
            style={{
              height: '1245.5px',
              width: '50vw',
              background: 'white',
            }}
          />

          <CheckBoxList>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </CheckBoxList>
          <TextBoxList>
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
            <textarea />
          </TextBoxList>
        </Container>
      </>
    );
  }
}
export default CheckPlanPresenter;
