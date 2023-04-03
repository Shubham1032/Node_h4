import React from 'react'

const Response = (props) => {
const Token=props.token

  return (
    <div>
<h1>You are logged in</h1>
{Token}
    </div>
  )
}

export default Response