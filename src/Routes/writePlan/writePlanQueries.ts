import { gql } from 'apollo-boost';

export const ADD_PLAN = gql`
  mutation addPlan(
    $thumbnail: String!
    $writer: String
    $title: String
    $avatar: String
    $content: String
    $text: String
    $image: String
    $detailPlans: [detailPlan]
  ) {
    AddPlan(
      thumbnail: $thumbnail
      writer: $writer
      title: $title
      avatar: $avatar
      content: $content
      text: $text
      image: $image
      detailPlans: $detailPlans
    ) {
      ok
      error
    }
  }
`;
