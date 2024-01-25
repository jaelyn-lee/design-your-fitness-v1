import { useNavigate } from 'react-router-dom'
import { User } from '../../models/users'
import { useState } from 'react'
import { supabase } from '../../supabase-client'

interface goals {
  image: string
  workout_goal: string
  user: User | null
}

export default function GoalContainer(props: goals) {
  const navigate = useNavigate()
  const [goal, setGoal] = useState(props.workout_goal)

  const handleClick = async () => {
    setGoal(props.workout_goal)
    await supabase.from('workout_goals').insert({
      user_id: props.user?.id,
      workout_goal: goal,
    })
    if (props.user) {
      navigate('/fitness-levels', { state: { user: props.user } })
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
