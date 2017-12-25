import React from 'react'
import {
  Link
} from 'react-router-dom'

const BasicExample = () => (

    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </div>
)

export default BasicExample