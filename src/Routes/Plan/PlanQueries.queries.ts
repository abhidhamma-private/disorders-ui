import { gql } from 'apollo-boost';

export const GET_PLAN = gql`
  query getPlan($planId: Int!) {
    GetPlan(planId: $planId) {
      ok
      error
      plan {
        title
        content
        text
        createdAt
        detailPlans {
          detailPlanId
          planName
          startTime
          endTime
          allDay
        }
        user {
          nickName
          avatar
        }
      }
    }
  }
`;
