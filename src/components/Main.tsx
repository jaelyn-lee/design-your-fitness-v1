// import { useNavigate } from 'react-router-dom'
import Button from './UI/Button'
import { useAuth0 } from '@auth0/auth0-react'

export default function Main() {
  // const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()

  // function handleRedirect() {
  //   navigate('/user-form')
  // }

  return (
    <div className="text-center pt-44 sm:pt-60 h-screen">
      <h1 className="text-4xl text-center font-extrabold sm:text-8xl uppercase pb-10 sm:pb-40">
        Design your fitness
      </h1>
      {/* <Button content="Get Started" onClick={handleRedirect} /> */}
      <Button content={'Get Started'} onClick={loginWithRedirect} />
    </div>
  )
}
