import React from 'react';
import { Modal, Button, Input } from 'antd';
import styled from 'styled-components';
import { SIGN_UP } from './SignUpmodalQueries.queries';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
const Grid = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 13vw);
  grid-template-rows: repeat(2, 10vh);
  max-width: 800px;
  max-height: 200px;
  margin-top: 1vh;
  justify-content: space-around;
`;

const Img = styled.img`
  display: grid;
  margin: 0 auto;
  max-width: 60px;
  max-height: 60px;
  cursor: pointer;
  &:active {
    border: 3px solid orange;
  }
`;
const ButtonGrid = styled.div`
  display: grid;
  justify-content: flex-end;
  align-items: flex-end;
  grid-template-columns: 1fr 1fr;
  margin-top: 50px;
`;

class SignUpmodalPresenter extends React.Component<any, any, any> {
  public state = {
    loading: false,
    visible: false,
    signUpVeriable: {
      nickName: '',
      password: '',
      avatar: '',
    },
    nickName: '',
    password: '',
    avatar: '',
  };

  public showModal = () => {
    this.setState({
      visible: true,
    });
  };

  public handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  public handleCancel = () => {
    this.setState({ visible: false });
  };

  public addSignUpAvatar = () => {
    const a = 1;
    return a;
  };

  public render() {
    console.log('사인업모달프레젠터');
    console.log(this.props);
    const { visible } = this.state;
    const { signUpVeriable } = this.state;
    return (
      <>
        <div>
          <Button
            type="default"
            onClick={this.showModal}
            style={{ borderRadius: '0px', fontWeight: 900 }}>
            새 계획표 작성
          </Button>
        </div>

        <Modal
          style={{ top: '1vh' }}
          bodyStyle={{ height: '80vh' }}
          title={[
            <p key="back">간단 회원가입으로 내 계획표를 관리할수있어요!</p>,
          ]}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
          footer={false}>
          <p>
            닉네임 <Input name={'nickName'} onChange={this.onNickNameChange} />
          </p>
          <br />
          <p>
            비밀번호
            <Input name={'password'} onChange={this.onPasswordChange} />
          </p>
          <br />
          <p>아바타</p>
          <Grid>
            <Img
              src="https://item.kakaocdn.net/do/750d7c74b9cfd1448d2690b58fe3272bf43ad912ad8dd55b04db6a64cddaf76d"
              onClick={this.onAvatarClick}
            />
            <Img
              src="https://item.kakaocdn.net/do/aaacfe7e3c6d0564fded2313c5397779f43ad912ad8dd55b04db6a64cddaf76d"
              onClick={this.onAvatarClick}
            />
            <Img
              src="https://item.kakaocdn.net/do/d0195d9f27e6eab9548b7ce619b07c54f43ad912ad8dd55b04db6a64cddaf76d"
              onClick={this.onAvatarClick}
            />
            <Img
              src="https://item.kakaocdn.net/do/7514a57f2f72400d403ba8e3544c07caf43ad912ad8dd55b04db6a64cddaf76d"
              onClick={this.onAvatarClick}
            />
            <Img
              src="https://item.kakaocdn.net/do/1ce9eaa15f9df6e96ad4f7d60aa00662f43ad912ad8dd55b04db6a64cddaf76d"
              onClick={this.onAvatarClick}
            />
            <Img
              src="https://item.kakaocdn.net/do/36e509cee3c0d3e6284e26f4df760bcaf43ad912ad8dd55b04db6a64cddaf76d"
              onClick={this.onAvatarClick}
            />
            <Img
              src="https://item.kakaocdn.net/do/f557e4c6ccd84cf7ec9e57b2fb6a4d93f43ad912ad8dd55b04db6a64cddaf76d"
              onClick={this.onAvatarClick}
            />
            <Img
              src="https://item.kakaocdn.net/do/02a94b155b944e819408d7befaa0ab4ef43ad912ad8dd55b04db6a64cddaf76d"
              onClick={this.onAvatarClick}
            />
            <Img src="https://image.freepik.com/free-icon/plus-circle_318-28097.jpg" />
          </Grid>
          <ButtonGrid>
            <Button key="back" onClick={this.handleCancel}>
              로그인하기
            </Button>

            <Mutation
              mutation={SIGN_UP}
              onCompleted={signUpResult => {
                console.log('signup completed signUpResult');
                console.log(signUpResult);

                toast.success('가입완료! 계획작성 페이지로 이동합니다.');
                const location = {
                  pathname: '/write-plan',
                  state: {
                    user: signUpResult.SignUp.user,
                  },
                };
                setTimeout(() => {
                  return this.props.history.push(location);
                }, 2000);
              }}>
              {(SignUpFn, { data }) => {
                console.log('제출 클릭됨render시');
                console.log(signUpVeriable);
                console.log('signupMutationdata');
                console.log(data);

                return (
                  <>
                    <Button
                      onClick={e => {
                        e.preventDefault();
                        console.log('제출 클릭됨onClick시');
                        console.log(signUpVeriable);
                        SignUpFn({
                          variables: signUpVeriable,
                        });
                      }}>
                      가입하기
                    </Button>
                  </>
                );
              }}
            </Mutation>
          </ButtonGrid>
        </Modal>
      </>
    );
  }

  public onNickNameChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async event => {
    const {
      target: { name, value },
    } = event;
    await this.setState({
      [name]: value,
    } as any);
    console.log('onNickNameChange');

    console.log('this.state.signUpVeriable.nickName');
    console.log(this.state.signUpVeriable.nickName);
    this.state.signUpVeriable.nickName = this.state.nickName;
    console.log('this.state');
    console.log(this.state);
  };

  public onPasswordChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async event => {
    const {
      target: { name, value },
    } = event;
    await this.setState({
      [name]: value,
    } as any);
    console.log('onNickNameChange');

    console.log('this.state.signUpVeriable.nickName');
    console.log(this.state.signUpVeriable.password);
    this.state.signUpVeriable.password = this.state.password;
    console.log('this.state');
    console.log(this.state);
  };

  public onAvatarClick = async event => {
    console.log('event');
    console.log(event.target);
    this.state.signUpVeriable.avatar = event.target.src;
    const {
      target: { name, value },
    } = event;
    await this.setState({
      [name]: value,
    } as any);

    toast.info('아바타가 선택되었습니다.');
  };
}
export default SignUpmodalPresenter;
