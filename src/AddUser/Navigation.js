import React from 'react'
import {Link} from "react-router-dom"
import './Navigation.scss'

export default function Navigation() {
    return (
        <div className='containers'>
            <Link to='/' className='text-decoration-none'><p className="userlist">User List</p></Link>
            <Link to='/add_user' className='text-decoration-none'><p className='addUser'>Add User</p></Link>            
        </div>
    )
}
