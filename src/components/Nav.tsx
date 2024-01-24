import { useNavigate } from 'react-router-dom'

interface Props {
  toggleMenu: () => void
}

export default function Nav(props: Props) {
  const navigate = useNavigate()

  function goTo(link: string) {
    props.toggleMenu()
    navigate(link)
  }

  return (
    <nav>
      <nav className="mt-10 pt-16 pl-4 flex justify-end items-end pr-4">
        <ul className="text-3xl text-right">
          <li className="hover:text-black hover:font-black">
            <button onClick={() => goTo('/')}>Home</button>
          </li>
          <li className="hover:text-black hover:font-black">
            <button onClick={() => goTo('/weight-tracker')}>
              Weight Tracker 
            </button>
          </li>
        </ul>
      </nav>
    </nav>
  )
}
