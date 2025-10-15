import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Card = ({ gift }) => {
  // Backup images matched by gift name (more reliable than IDs)
  const backupImagesByName = {
    'Lego Flower Bouquet Kit': '/legoflower.webp',
    'Nintendo Switch Lite': '/switchlite.webp',
    'Nike Panda Dunks': '/nikepanda.jpg',
    'Razer Kitty Headset': '/RazerKittyHeadset.webp'
  }

  // Check if this gift has a backup image by matching its name
  const imageUrl = backupImagesByName[gift.name] || gift.image

  return (
    <article className="card">
      <div className="top-container">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(${imageUrl}), linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #fce7f3 100%)`
          }}
        ></div>
        <Link to={`/edit/${gift.id}`} className="edit-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </Link>
      </div>
      <div className="card-content">
        <h3>{gift.name}</h3>
        <div className="card-meta">
          <div className="card-price">{gift.pricepoint}</div>
          <div className="card-audience">{gift.audience}</div>
        </div>
        <Link to={`/gift/${gift.id}`} className="card-button" role="button">
          Read More
        </Link>
      </div>
    </article>
  )
}

export default Card