import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../views/HomeView'

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Root
