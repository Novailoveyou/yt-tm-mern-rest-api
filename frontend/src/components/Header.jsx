import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const links = [
    {
      route: '/login',
      icon: <FaSignInAlt />,
      text: 'Login'
    },
    {
      route: '/register',
      icon: <FaUser />,
      text: 'Register'
    }
  ]
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
        {links.map((link, idx) => (
          <li key={`${link.text}-${idx}`}>
            <Link to={link.route}>
              {link.icon} {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
