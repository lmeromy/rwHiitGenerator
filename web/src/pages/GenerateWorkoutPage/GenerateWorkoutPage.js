import { Form, TextField, Submit, FieldError, Label } from '@redwoodjs/web'
import HiitAppLayout from 'src/layouts/HiitAppLayout'
const GenerateWorkoutPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <HiitAppLayout>
        <h1>Set up your ideal HIIT workout:</h1>
        <Form onSubmit={onSubmit}>
          <Label id="length" name="length" errorClassName="error">
            Length of Workout (minutes)
          </Label>
          <select className="dropdown-length" id="length">
            <option value="5">5 Minutes</option>
            <option value="10">10 Minutes</option>
            <option value="12">12 Minutes</option>
            <option value="15">15 Minutes</option>
            <option value="20">20 Minutes</option>
          </select>
          <FieldError name="length" className="error" />

          <Label name="type" errorClassName="error">
            Type of Workout
          </Label>
          <TextField
            name="type"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="type" className="error" />

          <Label name="workInterval" errorClassName="error">
            Work Interval (seconds)
          </Label>
          <TextField
            name="workInterval"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="workInterval" className="error" />

          <Label name="restInterval" errorClassName="error">
            Rest Interval (seconds)
          </Label>
          <TextField
            name="restInterval"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="restInterval" className="error" />
          <Submit>Generate My Workout</Submit>
        </Form>
      </HiitAppLayout>
    </>
  )
}

export default GenerateWorkoutPage
