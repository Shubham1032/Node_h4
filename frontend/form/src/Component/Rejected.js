import React from 'react'
import { Link } from 'react-router-dom'

const Rejected = () => {
  return (
    <div>
<h1>Try again</h1>
<Link to='/login'>
<button>Go to login </button></Link>
<Link to='/'>
<button>Go to Sign up </button>
</Link>

    </div>
  )
}

export default Rejected