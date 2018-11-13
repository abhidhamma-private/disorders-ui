import React from 'react';
import styled from 'styled-components';
// tslint:disable
var Avatar = styled.div`
  position: absolute;
  display: grid;
  justify-self: flex-end;
  z-index: 1;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: white;

  & img {
    align-self: center;
    justify-self: center;
    display: block;
    width: 3.75rem;
    height: 3.75rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }
`;
class AvatarPresenter extends React.Component<any | undefined, any> {
  render() {
    return (
      <>
        <Avatar style={this.props.style}>
          <img src={this.props.avatar} />
        </Avatar>
      </>
    );
  }
}

export default AvatarPresenter;
