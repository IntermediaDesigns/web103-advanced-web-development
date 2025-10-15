import { useState } from 'react'
import '../css/CreateGift.css'

const CreateGift = () => {
  const [gift, setGift] = useState({
    name: '',
    pricepoint: '$',
    audience: '',
    image: '',
    description: '',
    submittedby: '',
    submittedon: new Date().toLocaleDateString('en-US')
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setGift((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const createGift = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gift)
    }

    fetch('/gifts', options)
    window.location = '/'
  }

  return (
    <div className="create-form">
      <center>
        <h2>Add a Gift</h2>
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

        <input
          className="submit-button"
          type="submit"
          value="Submit"
          onClick={createGift}
        />
      </form>
    </div>
  )
}

export default CreateGift
