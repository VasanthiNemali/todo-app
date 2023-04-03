import React from 'react'
import Todos from './Images/todos.png';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img  className='header-logo' src={Todos}/>
        <h3>Lets Make A List</h3>

    </div>
  )
}

export default Header