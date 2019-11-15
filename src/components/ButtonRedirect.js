import React from 'react'
import {Link} from 'react-router-dom'

const ButtonRedirect =({text,link}) => {
  return(
    <Link to={link} className="btn btn-success btn-lg action-btn">
      {text}
    </Link>  
  )
}

export default ButtonRedirect