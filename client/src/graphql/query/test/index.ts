import { gql } from '@apollo/client';

export const TEST = gql`
  query Test {
    test {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
