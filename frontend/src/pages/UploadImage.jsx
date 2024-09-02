import React, { useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'

const UploadImage = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const res = await api.post('images/', { name, image }, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <h1>Upload Image</h1>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Image Name: </label>
                <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} required  />
                <br /><br />
                <label htmlFor="image">Image: </label>
                <input type="file" name="image" id="image" onChange={e => {
                    setImage(e.target.files[0])
                    setImagePreview(URL.createObjectURL(e.target.files[0]))
                }} required />
                <br /><br />

                {
                    imagePreview && <img src={imagePreview} alt="preview" width="200px" />
                }

                <br /><br />
                <button type='submit'>Submit</button>
            </form>

            <br /><br />
            <Link to="/view-images">View Images</Link>
        </div>
    )
}

export default UploadImage