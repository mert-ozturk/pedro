import React from 'react'
import ChangeProfile from './ChangeProfile'

const Profile = (props) => {
  return (
    <div>Profile: {props.username} 
    <ChangeProfile setUsername={props.setUsername}/> </div>
  )
}

export default Profile