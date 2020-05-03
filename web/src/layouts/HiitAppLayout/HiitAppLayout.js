import { Link, routes } from '@redwoodjs/router'

const HiitAppLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>HIIT at HOME!</Link>
        </h1>

        <p>Generate a custom HIIT workout: No equipment needed!</p>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.generateWorkout()}>Generate a Workout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default HiitAppLayout
