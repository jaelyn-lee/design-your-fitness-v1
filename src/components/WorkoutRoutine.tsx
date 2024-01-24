import { useLocation } from 'react-router-dom'
import { fetchExercises } from '../api/exercises'
import { useEffect, useState } from 'react'

interface Exercises {
  id: number
  name: string
  description: string
  muscle_group: string
  difficulty: string
  reps: number
}

export default function WorkoutRoutine() {
  const location = useLocation()
  const user = location.state?.user
  const fitnessLevel = user.fitness_level

  const [fetchedExercises, setFetchedExercises] = useState([] as Exercises[])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchExercises()
        setFetchedExercises(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const filteredExercises = fetchedExercises.filter(
    (exercise) =>
      (fitnessLevel >= 0 &&
        fitnessLevel <= 3 &&
        exercise.difficulty === 'Beginner') ||
      (fitnessLevel >= 4 &&
        fitnessLevel <= 7 &&
        exercise.difficulty === 'Intermediate') ||
      (fitnessLevel >= 8 &&
        fitnessLevel <= 10 &&
        exercise.difficulty === 'Advanced'),
  )

  //Split the filtered workout routine into 4 different days
  const exercisesPerDay = 4

  const workoutDays = []
  for (let i = 0; i < 4; i++) {
    const startIndex = i * exercisesPerDay
    const endIndex = startIndex + exercisesPerDay
    workoutDays.push(filteredExercises.slice(startIndex, endIndex))
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center text-4xl font-extrabold mb-10">
        <h1>Thank you, {user.first_name}!</h1>
        <h1>Here is your 4-day workout routine!</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {workoutDays.map((exercises, dayIndex) => (
            <div key={dayIndex}>
              <ul className="list-disc pl-6 border-2 border-white border-solid p-4 bg-white text-black list-none">
                <h2 className="text-3xl font-semibold text-red text-center mb-3">
                  Day {dayIndex + 1}
                </h2>
                {exercises.map((routine, exerciseIndex) => (
                  <li key={exerciseIndex} className="text-center">
                    <div className="mb-3">
                      <p>
                        <span className="font-extrabold text-xl">
                          {routine.name}{' '}
                        </span>{' '}
                        ({routine.muscle_group})
                      </p>
                      <p>
                        <span className="font-bold text-xl">3</span> sets x{' '}
                        <span className="font-bold text-xl">
                          {routine.reps}
                        </span>{' '}
                        reps
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
