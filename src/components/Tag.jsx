import React from 'react'
import "../components/styles.css"

const Tag = (props) => {
    const {label} = props 
  return (
    <div className='tag'>
    {label}
    </div>
  )
}

export default Tag