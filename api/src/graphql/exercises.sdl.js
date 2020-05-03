export const schema = gql`
  type Exercise {
    id: Int!
    name: String!
    description: String!
    category: String!
    image: String
    videoLink: String
    createdAt: DateTime!
  }

  type Query {
    exercises: [Exercise!]!
    exercise(id: Int!): Exercise!
  }

  input CreateExerciseInput {
    name: String!
    description: String!
    category: String!
    image: String
    videoLink: String
  }

  input UpdateExerciseInput {
    name: String
    description: String
    category: String
    image: String
    videoLink: String
  }

  type Mutation {
    createExercise(input: CreateExerciseInput!): Exercise!
    updateExercise(id: Int!, input: UpdateExerciseInput!): Exercise!
    deleteExercise(id: Int!): Exercise!
  }
`
