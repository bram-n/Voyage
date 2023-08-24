import React from 'react'
import 'react-bootstrap'
import {useAuth} from "../Contexts/AuthContext"
import NavBar from '../Components/NavBar'
export default function Home() {
  const {currentUser} = useAuth()
  return (

    <>
    <NavBar/>
    <h1 className='text-center'>
      Welcome to our Home Page
    </h1>
    {console.log(currentUser?.toJSON)}
    </>
  )
}
