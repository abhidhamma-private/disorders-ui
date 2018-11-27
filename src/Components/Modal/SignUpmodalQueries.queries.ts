import { gql } from 'apollo-boost';

export const SIGN_UP = gql`
  mutation SignUp($nickName: String!, $password: String!, $avatar: String!) {
    SignUp(nickName: $nickName, password: $password, avatar: $avatar) {
      ok
      error
      user {
        userId
        nickName
        avatar
        password
      }
    }
  }
`;

export const SIGN_IN = gql`
  query SignIn($nickName: String!, $password: String!) {
    SignIn(nickName: $nickName, password: $password) {
      ok
      error
      token
    }
  }
`;
