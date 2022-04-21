import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

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
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          links.map((link, idx) => (
            <li key={`${link.text}-${idx}`}>
              <Link to={link.route}>
                {link.icon} {link.text}
              </Link>
            </li>
          ))
        )}
      </ul>
    </header>
  )
}

export default Header
