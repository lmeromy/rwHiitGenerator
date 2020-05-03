import HiitAppLayout from 'src/layouts/HiitAppLayout'
import GetExercisesCell from 'src/components/GetExercisesCell'

const HomePage = () => {
  return (
    <>
      <HiitAppLayout>
        <button>Generate a workout</button>
        <GetExercisesCell />
      </HiitAppLayout>
    </>
  )
}

export default HomePage
