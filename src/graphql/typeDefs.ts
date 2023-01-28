import gql from 'graphql-tag';

export const typeDefs = gql`
  scalar Date
  scalar JSON

  type Test {
    id: ID!
    text: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    test: Test!
  }
`;
