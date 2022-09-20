import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
export const Navigation = () => {



  const classToActive = (isActive: boolean) => {
    return isActive ? 'nav-active' : '';
  }
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav><img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink className={({ isActive }) => classToActive(isActive)} to='/home'>Home</NavLink>
            </li>
            <li> 
              <NavLink className={({ isActive }) => classToActive(isActive)} to='/about'> About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => classToActive(isActive)} to='/users'> Users</NavLink>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/*" element={<Navigate to='/home' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
