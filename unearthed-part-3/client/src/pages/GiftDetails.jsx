import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const GiftDetails = () => {
  const [gift, setGift] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    // Step 3: Fetch gift by ID
    const fetchGiftById = async () => {
      const response = await fetch(`/gifts/${id}`)
      const data = await response.json()
      setGift(data)
    }

    fetchGiftById()
  }, [id])

  if (!gift) {
    return <div>Loading...</div>
  }

  return (
    <main className="gift-details-container">
      <div className="gift-details-content">
        <div className="image-container">
          <img src={gift.image} alt={gift.name} />
        </div>
        <div className="gift-info">
          <h2>{gift.name}</h2>
          <p><strong>Submitted by:</strong> {gift.submittedby}</p>
          <p><strong>Submitted on:</strong> {new Date(gift.submittedon).toLocaleDateString()}</p>
          <p><strong>Price Point:</strong> {gift.pricepoint}</p>
          <p><strong>Audience:</strong> {gift.audience}</p>
          <p><strong>Description:</strong> {gift.description}</p>
          <Link to="/" className="back-button">← Back to Gifts</Link>
        </div>
      </div>
    </main>
  )
}

export default GiftDetails