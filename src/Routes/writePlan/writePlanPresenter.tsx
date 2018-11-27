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
  constructor(...props) {
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
    console.log('라이트플랜프롭스');
    console.log(this.props);
    const thumbnail = [
      'https://images.velog.io/post-images/maemi/8f34a060-c487-11e8-9e37-7d7c50d08616/benjaminchild15826.jpg',
      'https://lh3.googleusercontent.com/proxy/6gLbz6fLpHWeNGMCg-3SAr4V3qJsZN_Q-VePkM70-FbHVROkRKx35pwEenRDVLuRSnQse6MTKo455BPVwULXX42R7VjAKJbm-4ivxQ=w3840-h2160-p-k-no-nd-mv',
      'https://lh4.googleusercontent.com/proxy/RJL_sZmgUZBEFNlzQ7b3C39_PruUBn8ngwhSgvhZ4X6qnB1tvt7QpuUft6GkiYpsro3GwrCfBKbFrgplvzOgb0iTtR3I9cN8wE55Bw=w3840-h2160-p-k-no-nd-mv',
      'https://lh6.googleusercontent.com/proxy/cXQDusPVA4hfmJAk0sAh_236WUTvrnukBMUtqp2Bv2qTB1e7blG0oA4EnruAEVMVkSIwjKBRlqF99Npjk5MBGW0eGtBDWOb2YrJIkw=w3840-h2160-p-k-no-nd-mv',
      'https://lh5.googleusercontent.com/proxy/G2ZX5jY_rNF0_lAPF7DNQ_HPvKjULeFbZ_DKTbXDGi81PprxKAN1lmBJ3ubf3krtEjZEMgwmyBP7-Ro8BuTSk35pgdn_TI9m2NRCjqQ=w3840-h2160-p-k-no-nd-mv',
      'https://lh5.googleusercontent.com/proxy/A9UohNfjlZroSP_5ZV-P1_abzqa9x6wSmBbqHC7uZJgWcd5c1dCbU4AEYpu6Wprr74BbPKixARXu9YzdN0-cItQVcmTVnzB2JM6Fc9Q=w3840-h2160-p-k-no-nd-mv',
      'https://lh6.googleusercontent.com/proxy/_V2xTm88niuAItFt0DEWsNSeiNxs7dT3Dk5aq9hKXS3Csr1PHMxGjhxXRtdQHlN0wzLmrHFPnmCpImyuJaPBgaC3JXAfGcQ5vJrCIik=w3840-h2160-p-k-no-nd-mv',
      'https://lh4.googleusercontent.com/proxy/-q634HdDNz4MA0LA7YG09t88Hs6YmXD9wHx6MaLJTsANWN-xeBvth-HTRWWXWU7XuWOsbWmV9bpflasYTnbZAwB5vKbRWjTCAl9ZTw=w3840-h2160-p-k-no-nd-mv',
      'https://lh3.googleusercontent.com/proxy/06-vmKwLTD7fQBmQrRevMHotNh3oKBa0j3L_lLYgtC5o8tQZZez-5Lj_zoWBfAUFeb43Zy1CuGc6YZH7rwZCRrrpiaWHAWiVqiJYNbnTpek=w3840-h2160-p-k-no-nd-mv',
      'https://lh5.googleusercontent.com/proxy/y52zdZfNo9xQbUVM-sSeHEFeLW9D4AuCJwP2duaCHZLPRBFBsCAkQlGIcabdEu1eYxjaLmJaWKjhF2ovJ1G5cGfywDuWI5rQFcx7CamHSR0=w3840-h2160-p-k-no-nd-mv',
      'https://lh5.googleusercontent.com/proxy/pYUY2I7Lj8H0_Z95eySjaB5AOhb_3OSE405dUj9KU_ud7krojkjNcmPWloF4O1Q6bjdmwylOMr3bQBSAS75u-Ez91HP52YXL8Dy9jeXmLaU=w3840-h2160-p-k-no-nd-mv',
      'https://lh3.googleusercontent.com/proxy/fIetg4AqSOLgPFTYef06GJ3XmpiebMBHGJmjQnP2Hc31pvumQDvBPu4eYVXfBQGsXxXIEyOxKSbwojxTq8xmUfUBtON5lJrtP6CLIfQx_l8=w3840-h2160-p-k-no-nd-mv',
      'https://lh4.googleusercontent.com/proxy/fIWISB0CSnSRfLTS7sSszKQVvpGIWt_h7uDdEO3EnNSSxu4Ik5VpkoyooVE03lNQC046HK_tXs4VNaKtSBcYVZ1tzhXHZSPgLMhQ32uGdOE=w3840-h2160-p-k-no-nd-mv',
      'https://lh5.googleusercontent.com/proxy/aVBkTd01pH0IMxyaK9dULeV09oS-hS-s_2zodpuJDf6EckTOZlliJZduSbEtMsJMdjHj1AWfx0I_08RnB1pZB4WDdj9-y0CFoeN4=w3840-h2160-p-k-no-nd-mv',
      'https://lh5.googleusercontent.com/proxy/MtElYoSU_m7OfA24xqod41dvQ-gbH58xCAszSH4zN_OSWTa9dt9Am7TPszbOCUcooO9IkUrSdVJ49-um603KAD0wd4KS4Mug1_UyInn_SMmP42r0gqgCTKQN=w3840-h2160-p-k-no-nd-mv',
      'https://lh3.googleusercontent.com/proxy/GL19kwKCZcBxd_zQWf-mE7EHnvNSi3rSL9_div-C6kbJeZFNZ-TphyqEhKJi9aJtKrEUND0xScZqD5I6AT1XWzvHC3bNoFu7paGAOg=w3840-h2160-p-k-no-nd-mv',
      'https://lh5.googleusercontent.com/proxy/cZST6PRQUzCX5N6TNLfv01eSBcVuMMCBpoI5yRY1mbXUgUVM49kgUi2k5XmAQ2ZP5xST1PB_4tBR9ijxlYL35O9n2mfmtg51LkfRzGeR8ySHFi9m=w3840-h2160-p-k-no-nd-mv',
      'https://lh4.googleusercontent.com/proxy/cKn_Ma4nJNq0o_s51D7boeDN7USQxtfkbqWzUdPcdcVdqI1A96dQuNQpZizLK4807mkUsPwIrdvEkc0hRDgBDmcuAQ-Jv-D1k177xQjIQx0l_cqE0_sTSj1P=w3840-h2160-p-k-no-nd-mv',
      'https://lh6.googleusercontent.com/proxy/9vPe9RiSpzLvuOuxq8jjJE9kSyzvMxlzkIAdZIceGStzJOfPGp146eMAyzTgoDvkAGCz67rVosPLdDC6632e7vNfHXFX8igbizFIc3ibsfySn77IBMyKZQ=w3840-h2160-p-k-no-nd-mv',
      'https://lh6.googleusercontent.com/proxy/0T_Gvo0SML6i3j0kie56HHDMAuaNI_UqFHW2OECA0rlhqg7cy9XS2POR5fh-AxcHppMDUe9VAlSADVhrzCyf0oYxRhmMCHmZY2OAxw=w3840-h2160-p-k-no-nd-mv',
    ];
    console.log('없어?');
    console.log(thumbnail[Math.floor(Math.random() * 19)]);
    console.log('왜?');
    const headerTheme = 'write';
    const addPlanVeriable = (() => {
      return {
        thumbnail: thumbnail[Math.floor(Math.random() * 19)],
        // writer: this.state.writer ? this.state.writer : '익명',
        title: this.state.title ? this.state.title : '익명의 계획표',
        // avatar: this.state.avatar
        //   ? this.state.avatar
        //   : 'https://www.surfaceinside.de/wp-content/uploads/blog_WindowsHello.jpg',
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
        user: { userId: this.props.location.state.user.userId },
      };
    })();

    return (
      <>
        <CommonContainer
          headerTheme={headerTheme}
          addPlanVeriable={addPlanVeriable}
          match={this.props.match}
          history={this.props.history}
          location={this.props.location}
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
