import React from 'react'
import 'react-bootstrap'
import {useAuth} from "../Contexts/AuthContext"
export default function Home() {
  const {currentUser} = useAuth()
  return (

    <>
    <h1 className='text-center'>
      Welcome to our Home Page
    </h1>
    <strong>Email:</strong> {currentUser?.email}
    {console.log(currentUser?.toJSON)}
    </>
  )
}
