import Exercise from 'src/components/Exercise'

export const QUERY = gql`
  query FIND_EXERCISE_BY_ID($id: Int!) {
    exercise: exercise(id: $id) {
      id
      name
      description
      category
      image
      videoLink
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Exercise not found</div>

export const Success = ({ exercise }) => {
  return <Exercise exercise={exercise} />
}
