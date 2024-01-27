import { useNavigate } from 'react-router-dom'
import Button from './UI/Button'

export default function Main() {
  const navigate = useNavigate()

  function handleRedirect() {
    navigate('/user-form')
  }

  return (
    <div className="text-center pt-44 h-screen">
      <h1 className="text-4xl text-center font-extrabold sm:text-8xl uppercase pb-10">
        Design your fitness
      </h1>
      <Button content="Get Started" onClick={handleRedirect} />
    </div>
  )
}
