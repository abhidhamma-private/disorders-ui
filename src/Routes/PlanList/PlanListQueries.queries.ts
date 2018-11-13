import { gql } from 'apollo-boost';

export const GET_PLANS = gql`
  query getPlans {
    GetPlans {
      ok
      error
      plan {
        planId
        thumbnail
        writer
        title
        avatar
        content
        createdAt
      }
    }
  }
`;
