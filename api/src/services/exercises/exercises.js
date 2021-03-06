import { db } from 'src/lib/db'

export const exercises = () => {
  return db.exercise.findMany()
}

export const exercise = ({ id }) => {
  return db.exercise.findOne({
    where: { id },
  })
}

export const createExercise = ({ input }) => {
  return db.exercise.create({
    data: input,
  })
}

export const updateExercise = ({ id, input }) => {
  return db.exercise.update({
    data: input,
    where: { id },
  })
}

export const deleteExercise = ({ id }) => {
  return db.exercise.delete({
    where: { id },
  })
}
