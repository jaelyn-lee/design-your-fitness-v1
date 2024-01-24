import { useNavigate } from 'react-router-dom'
import { UserData } from '../../../models/users'
import { useState } from 'react'
import { addNewUserWorkoutGoal } from '../../api/users'

interface goals {
  image: string
  workout_goal: string
  user: UserData | null
}

export default function GoalContainer(props: goals) {
  const navigate = useNavigate()
  const [goal, setGoal] = useState(props.workout_goal)

  const handleClick = async () => {
    setGoal(props.workout_goal)
    try {
      await addNewUserWorkoutGoal({
        user_id: props.user?.id,
        workout_goal: goal,
      })
      if (props.user) {
        navigate('/fitness-levels', { state: { user: props.user } })
      }
    } catch (error) {
      console.error('Error adding new user', error)
    }
  }

  return (
    <div className="goal-container">
      <img
        src={props.image}
        alt={props.workout_goal}
        className="goal-container-image"
      />
      <button className="goal-container-button" onClick={handleClick}>
        {props.workout_goal}
      </button>
    </div>
  )
}
