export const QUERY = gql`
  query {
    exercises {
      id
      name
      category
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ exercises }) => {
  return exercises.map((exercise) => (
    <article key={exercise.id}>
      <header>
        <h3>{exercise.name}</h3>
      </header>
      <p>{exercise.category}</p>
    </article>
  ))
}
