import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-slate-400">
	<div className="navbar-start">
		<a className="navbar-item">Ripple UI</a>
	</div>
	<div className="navbar-end font-bold">
		<a className="navbar-item ">Home</a>
		<a className="navbar-item">About</a>
		<a className="navbar-item">Contact</a>
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to={'/profile'}>Profile</Link></li>
        <li><Link to={'/signup'}>signup</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
      </ul>
    </div>
	</div>
    
    
</div>
  )
}
{/* <div className="navbar bg-primary text-primary-content">
<button className="btn btn-ghost text-xl ">daisyUI</button>
</div>                                      */}
export default Navbar