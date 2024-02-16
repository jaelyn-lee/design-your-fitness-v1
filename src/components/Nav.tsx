import { useMediaQuery } from 'usehooks-ts'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery('(min-width: 1280px)')
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0()

  //Logout button
  const LogoutButton = () => {
    const handleLogout = () => {
      logout({ logoutParams: { returnTo: window.location.origin } })
    }
    return <button onClick={handleLogout}>Log out</button>
  }

  const navMotion = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  }
  const itemMotion = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  }
  return (
    <nav className="flex justify-between items-center w-full">
      <Logo />
      <div>
        {matches && (
          <div className="flex gap-12 item-center justify-center">
            <a href="/">Home</a>
            {isAuthenticated && (
              <>
                <a href="/my-page">My Page</a>
                <a href="/weight-tracker">Weight Tracker</a>
                <LogoutButton />
              </>
            )}
          </div>
        )}
        {/* toggle burger menu */}
        {!matches && (
          <div
            onClick={() => setToggled((preToggle) => !preToggle)}
            className="space-y-1.5 cursor-pointer z-50"
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-white"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 24 }}
              className="block h-0.5 w-6 bg-white"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16,
              }}
              className="block h-0.5 w-4 bg-white"
            ></motion.span>
          </div>
        )}
        {/* toggled items */}
        {toggled && !matches && (
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="fixed left-0 top-0  z-40 flex h-screen
            w-full flex-col items-center  justify-center  gap-24 bg-primary text-2xl font-bold"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/my-page">
              My Page
            </motion.a>
            <motion.a variants={itemMotion} href="/weight-tracker">
              Weight Tracker
            </motion.a>
            {isAuthenticated ? (
              <motion.a
                variants={itemMotion}
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="text-red font-bold"
              >
                Log out
              </motion.a>
            ) : (
              <motion.a
                variants={itemMotion}
                onClick={() => loginWithRedirect()}
                className="text-red font-bold"
              >
                Log in
              </motion.a>
            )}
          </motion.div>
        )}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg"
        ></motion.div>
      </div>
    </nav>
  )
}
