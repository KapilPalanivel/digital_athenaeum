import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div style={{display : 'flex' , flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}>
        <i>Page Not Found ...</i>
        <Link to={"/"} style={{textDecoration : 'none'}}>Rteurn to Home</Link>
    </div>
  )
}

export default ErrorPage