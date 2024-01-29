// import { Suspense, lazy, useState } from 'react'
import Logo from './Logo'
// import { IfAuthenticated } from '../hooks/useIsAuthenticated'
import { useAuth0 } from '@auth0/auth0-react'

// const Nav = lazy(() => import('./Nav'))

export default function Header() {
  const { logout, isAuthenticated } = useAuth0()
  // const [navOpen, setNavOpen] = useState(false)

  // const toggleMenu = () => {
  //   setNavOpen((pre) => !pre)
  // }

  //Logout button
  const LogoutButton = () => {
    return (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="bg-slate-700 text-white rounded-2xl px-2 py-2 shadow-sm"
      >
        Log Out
      </button>
    )
  }

  return (
    <div className="pl-4 pt-6 pr-4 flex justify-between items-center font-semibold">
      <div className="sm:ml-2 sm:mt-2">
        <Logo />
      </div>
      {isAuthenticated ? (
        <>
          <LogoutButton />
        </>
      ) : null}
      {/* {!navOpen && (
        <div>
          <button onClick={toggleMenu}>
            <i className="fa-solid fa-bars text-4xl"></i>
          </button>
        </div>
      )}

      {navOpen && (
        <button onClick={toggleMenu}>
          <i
            className={`fa-solid fa-times text-3xl transition ease-in-out focus:-rotate-45 duration-300`}
          ></i>
        </button>
      )}
      <nav
        className={`fixed z-50 left-0 top-32 h-full w-full backdrop-filter backdrop-blur-md text-white bg-primary bg-opacity-90 shadow-transparent transition-all ease-in-out duration-200 ${
          navOpen ? 'opacity-100' : 'hidden'
        }`}
      >
        <Suspense>
          <Nav toggleMenu={toggleMenu} />
        </Suspense>
      </nav> */}
    </div>
  )
}
