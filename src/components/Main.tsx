import { useNavigate } from 'react-router-dom'
import Button from './UI/Buttons/Button'

export default function Main() {
  const navigate = useNavigate()

  function handleRedirect() {
    navigate('/user-form')
  }

  return (
    <div className="text-center pt-44 h-screen">
      <h1 className="text-center font-extrabold text-8xl uppercase pb-10">
        Design your fitness
      </h1>
      <Button content="Get Started" onClick={handleRedirect} />
    </div>
  )
}
