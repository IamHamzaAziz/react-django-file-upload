import React, { useEffect, useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'

const ViewImages = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    try {
      const res = await api.get('images/')
      console.log(res.data)
      setImages(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <div>
      <h1>Images</h1>
      <Link to="/">Upload Image</Link>
      {images.map(image => (
        <div key={ image.id }>
          <h3>{ image.name }</h3>
          <img src={`http://127.0.0.1:8000/${ image.image }`} alt={ image.name } width={250} height={250} />
        </div>
      ))}

    </div>
  )
}

export default ViewImages