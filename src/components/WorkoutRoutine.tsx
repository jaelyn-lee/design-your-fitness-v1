import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase-client'
import { useAuth0 } from '@auth0/auth0-react'

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
  const userData = location.state?.user
  console.log(location.state)
  const { user } = useAuth0()

  const fitnessLevel = userData.fitness_level

  const [fetchedExercises, setFetchedExercises] = useState<Exercises[]>([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('exercises').select()
      console.log('fetched exercises: ', data)
      console.log(typeof data)
      if (error) {
        console.log(`Error: ${error}`)
      } else {
        setFetchedExercises(data)
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
        exercise.difficulty === 'Advanced')
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
      <div className="flex flex-col items-center justify-center text-2xl font-bold sm:text-6xl sm:font-extrabold mb-10 text-center">
        <h1>Thank you, {user?.given_name}!</h1>
        <h1>Here is your 4-day workout routine!</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {workoutDays.map((exercises, dayIndex) => (
            <div key={dayIndex}>
              <ul className="list-disc pl-6 border-2 border-white border-solid p-4 bg-white text-black">
                <h2 className="text-xl font-bold sm:text-4xl lg:text-3xl sm:font-semibold text-red text-center mb-3 sm:mb-6 lg:mb-3">
                  Day {dayIndex + 1}
                </h2>
                {exercises.map((routine, exerciseIndex) => (
                  <li key={exerciseIndex} className="text-center">
                    <div className="mb-3 sm:mb-8">
                      <p>
                        <span className="font-extrabold text-xl sm:text-3xl lg:text-xl">
                          {routine.name}{' '}
                        </span>{' '}
                        <span className="sm:text-2xl lg:text-base">
                          ({routine.muscle_group})
                        </span>
                      </p>
                      <p>
                        <span className="font-bold text-base sm:text-3xl lg:text-xl">
                          3
                        </span>{' '}
                        <span className="sm:text-2xl lg:text-base">
                          sets x{' '}
                        </span>
                        <span className="font-bold text-base sm:text-3xl lg:text-xl">
                          {routine.reps}
                        </span>{' '}
                        <span className="sm:text-2xl lg:text-base">reps</span>
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
