import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../css/EditGift.css'

const EditGift = () => {
  const { id } = useParams()
  const [gift, setGift] = useState({
    id: 0,
    name: '',
    pricepoint: '$',
    audience: '',
    image: '',
    description: '',
    submittedby: '',
    submittedon: ''
  })

  useEffect(() => {
    const fetchGiftById = async () => {
      const response = await fetch(`/gifts/${id}`)
      const data = await response.json()
      setGift(data)
    }
    fetchGiftById()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setGift((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const updateGift = (event) => {
    event.preventDefault()

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gift)
    }

    fetch(`/gifts/${id}`, options)
    window.location = '/'
  }

  const deleteGift = (event) => {
    event.preventDefault()

    const options = {
      method: 'DELETE'
    }

    fetch(`/gifts/${id}`, options)
    window.location = '/'
  }

  return (
    <div className="edit-form">
      <center>
        <h2>Update Gift</h2>
      </center>
      <form>
        <label>
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={gift.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Price Point
          <select
            name="pricepoint"
            id="pricepoint"
            value={gift.pricepoint}
            onChange={handleChange}
          >
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </label>

        <label>
          Great For
          <input
            type="text"
            id="audience"
            name="audience"
            value={gift.audience}
            onChange={handleChange}
          />
        </label>

        <label>
          Image URL
          <input
            type="text"
            id="image"
            name="image"
            value={gift.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Description
          <textarea
            rows="10"
            cols="50"
            id="description"
            name="description"
            value={gift.description}
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          Submitted By
          <input
            type="text"
            id="submittedby"
            name="submittedby"
            value={gift.submittedby}
            onChange={handleChange}
          />
        </label>

        <div className="button-group">
          <input
            className="submit-button"
            type="submit"
            value="Update"
            onClick={updateGift}
          />
          <button className="delete-button" onClick={deleteGift}>
            Delete
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditGift
