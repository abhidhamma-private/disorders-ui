import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import BackArrow from '../BackArrow';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Mutation } from 'react-apollo';
import { ADD_PLAN } from 'src/Routes/writePlan/writePlanQueries';
import SignUpmodalPresenter from '../Modal/SignUpmodalPresenter';

// import { toast } from 'react-toastify';

const Header = styled.header`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.6);
  height: 50px;
  width: 100%;
  border-bottom: #eeeeee;
  border-width: 0 0 1px;
  z-index: 2;
`;

const Row = styled.div`
  display: grid;
  grid-template-areas: '. brand menu .';
  grid-template-columns: 1fr 3fr 1fr 1fr;
  grid-template-rows: 50px;

  @media (max-width: 850px) {
    display: grid;
    grid-template-areas: 'brand menu';
    grid-template-columns: 4fr 2fr;
    grid-template-rows: 50px;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  &:nth-child(1) {
    grid-area: brand;
    justify-content: flex-start;
  }
  &:nth-child(2) {
    grid-area: menu;
    justify-content: flex-end;
    margin-right: 10px;
  }
`;

const Brand = styled.div`
  font-weight: 900;
  font-size: 30px;
  margin-left: 10px;
  margin-top: 10px;
`;

const Login = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-self: center;
  font-size: 15px;
  &Button {
    margin: 3px;
  }
`;
const Menu = styled.span`
  align-self: center;
  font-weight: 900;
  font-size: 20px;
  height: 30px;
  width: 40px;
  transform: rotate(90deg);
  margin-right: 5px;
  text-align: center;
`;

const Error = styled.div`
  width: 100vw;
  font-weight: 900;
  font-size: 25px;
  background: orange;
`;

// const VisitorOrUserToast = styled.div`
//   display: grid;
//   grid-gap: 5px;
//   grid-template-columns: 50px 50px;
//   grid-template-rows: 50px;
//   justify-content: space-around;
// `;
interface IProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  headerTheme: string;
  addPlanVeriable?: any;
  title: any;
  user: {
    nickName: any;
    userId: any;
  };
}

// const visitorOrUser = writePlanMutationData => {
//   console.log(writePlanMutationData);

//   return (
//     <VisitorOrUserToast>
//       <Button value="익명작성" onClick={writePlanMutationData} />
//       <Button value="회원가입작성" />
//     </VisitorOrUserToast>
//   );
// };
// const visitorOrUserCheck = () => {
//   toast(visitorOrUser, { autoClose: false });
// };

class HeaderPresenter extends React.Component<any, IProps, any> {
  public render() {
    console.log('헤더');
    console.log(this.props);
    switch (this.props.headerTheme) {
      case 'main':
        return (
          <Header>
            <Row>
              <Column>
                <Link to={'/home'}>
                  <Brand>:):</Brand>
                </Link>
              </Column>
              <Column>
                <Login>
                  {/* <Link to="/write-plan">
                    <Button value="새 계획표 작성" />
                  </Link> */}

                  {
                    <SignUpmodalPresenter
                      match={this.props.match}
                      history={this.props.history}
                      location={this.props.location}
                    />
                  }
                </Login>
                <Menu onClick={this.props.toggleMenu}>|||</Menu>
              </Column>
            </Row>
          </Header>
        );

      case 'write':
        return (
          <Header style={{ backgroundColor: 'rgb(52,58,64)', color: 'white' }}>
            <Row>
              <Column>
                <BackArrow backTo="/" />{' '}
                <Input
                  placeholder="제목^_^*"
                  onChange={this.onTitleChange}
                  name={'title'}
                />
              </Column>
              <Column>
                <Login>
                  <Mutation
                    mutation={ADD_PLAN}
                    variables={this.props.addPlanVeriable}
                    onCompleted={data => {
                      console.log('completed data');
                      console.log(data);

                      toast.success('작성완료! 리스트로 이동합니다.');
                      const location = {
                        pathname: '/',
                      };
                      setTimeout(() => {
                        return this.props.history.push(location);
                      }, 2000);
                    }}>
                    {(addPlanFn, { data }) => {
                      console.log('mutation 실행됨');
                      return <Button value="작성" onClick={addPlanFn} />;
                    }}
                  </Mutation>
                </Login>
              </Column>
            </Row>
          </Header>
        );

      case 'check':
        return (
          <Header style={{ backgroundColor: 'rgb(52,58,64)', color: 'white' }}>
            <Row>
              <Column>
                <BackArrow backTo="/" /> <Input placeholder="제목^_^*" />
              </Column>
              <Column>
                <Login>
                  <Button value="작성" />
                </Login>
              </Column>
            </Row>
          </Header>
        );
      default:
        return <Error>ERROR</Error>;
    }
  }

  public onTitleChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async event => {
    const {
      target: { name, value },
    } = event;
    await this.setState({
      [name]: value,
    } as any);
    console.log('oninputstate');

    console.log('this.props.addPlanVeriable.title');
    console.log(this.props.addPlanVeriable.title);
    this.props.addPlanVeriable.title = this.state.title;
    console.log('this.state');
    console.log(this.state);
  };

  // public onWriterChange: React.ChangeEventHandler<
  //   HTMLInputElement
  // > = async event => {
  //   const {
  //     target: { name, value },
  //   } = event;
  //   await this.setState({
  //     [name]: value,
  //   } as any);
  //   console.log('oninputstate');

  //   console.log('this.props.addPlanVeriable.title');
  //   console.log(this.props.addPlanVeriable.title);
  //   this.props.addPlanVeriable.writer = this.state.writer;
  //   console.log('this.state');
  //   console.log(this.state);
  // };
}

export default HeaderPresenter;
