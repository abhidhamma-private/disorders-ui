import { gql } from 'apollo-boost';

export const ADD_PLAN = gql`
  mutation addPlan(
    $thumbnail: String!
    $title: String
    $content: String
    $text: String
    $image: String
    $detailPlans: [detailPlan]
    $user: user
  ) {
    AddPlan(
      thumbnail: $thumbnail
      title: $title
      content: $content
      text: $text
      image: $image
      detailPlans: $detailPlans
      user: $user
    ) {
      ok
      error
    }
  }
`;
