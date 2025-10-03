import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import './Header.css'

export const Header = () => {
  return (
    <div className='header-container'>
      <div className='findallusers'>
        <h1>Find all the users <br /> In this page!</h1>
      </div>
      <FaUserCheck size={300}/>
    </div>
  )
}
