import { useState } from 'react'
import RatingScale from './RatingScale'
import { supabase } from '../supabase-client'
import Button from './UI/Button'
import { useLocation, useNavigate } from 'react-router-dom'

export default function FitnessLevel() {
  const [rating, setRating] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  const storedUserData = localStorage.getItem('userData')
  const user = storedUserData ? JSON.parse(storedUserData) : location.state.user

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
  }

  const handleClick = async () => {
    await supabase.from('fitness_levels').insert({
      user_id: user.id,
      fitness_level: rating,
    })
    const userWithFitnessLevel = { ...user, fitness_level: rating }
    navigate('/workout-routine', { state: { user: userWithFitnessLevel } })
  }
  return (
    <div className="grid place-content-center text-center w-full gap-6 pt-32">
      <h1 className="text-4xl font-extrabold">
        Rate your fitness level from 0 to 10:
      </h1>
      <RatingScale rating={rating} onChange={handleRatingChange} />
      <Button content="Next" onClick={handleClick} />
    </div>
  )
}
