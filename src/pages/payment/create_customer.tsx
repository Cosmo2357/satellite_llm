import React from 'react'

type Props = {}

function CreateCustomer({}: Props) {
  return (
<>

<form id="signup-form">
  <label>
    Email
    <input id="email" type="text" placeholder="Email address" value="test123@example.com" required />
  </label>

  <button type="submit">
    Register
  </button>
</form>

</>
  )
}

export default CreateCustomer