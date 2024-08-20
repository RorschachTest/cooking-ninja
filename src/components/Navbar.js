import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to='/'>
          <h1>Cooking Ninja</h1>
        </Link>
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  )
}
