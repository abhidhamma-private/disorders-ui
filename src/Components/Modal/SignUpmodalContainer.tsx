// import React from 'react';
// import SignUpmodalPresenter from './SignUpmodalPresenter';
// import { Mutation } from 'react-apollo';
// import { SIGN_UP } from './SignUpmodalQueries.queries';

// class SignUpmodalContainer extends React.Component {
//   public state = {
//     signUpVeriable: {
//       nickName: '',
//       password: '',
//       avatar: '',
//     },
//   };
//   public render() {
//     const { signUpVeriable } = this.state;
//     console.log('받은 사인업베리어블');
//     console.log(signUpVeriable);

//     return (
//       <Mutation
//         mutation={SIGN_UP}
//         variables={{ signUpVeriable }}
//         onError={data => console.log(data)}>
//         {(SignUpFn, { data }) => (
//           <SignUpmodalPresenter data={data} SignUpFn={SignUpFn} />
//         )}
//       </Mutation>
//     );
//   }
// }
// export default SignUpmodalContainer;
