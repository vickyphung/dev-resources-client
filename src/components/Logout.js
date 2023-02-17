import React from 'react'

const Logout = (props) => {
  return (
    <div>

        <h3>{props?.user?.name}</h3>

        <button
        onClick={() => {
          localStorage.removeItem("token");
          props.setUser(null);
        }}
      >
        Log Out!
      </button>
        </div>
  )
}

export default Logout