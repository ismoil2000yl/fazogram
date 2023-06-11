import React from 'react'
import { useParams } from 'react-router-dom'

const index = () => {

    const {id} = useParams()

  return (
    <div>index</div>
  )
}

export default index