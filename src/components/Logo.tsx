import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/">
      <button>
        <img src="/images/logo-no-background.png" alt="Logo" className="w-44" />
      </button>
    </Link>
  )
}

export default Logo
