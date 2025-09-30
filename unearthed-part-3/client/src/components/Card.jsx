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
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${imageUrl}), linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #fce7f3 100%)`
        }}
      ></div>
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