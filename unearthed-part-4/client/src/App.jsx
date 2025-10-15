import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gifts from './pages/Gifts'
import GiftDetails from './pages/GiftDetails'
import './App.css'

function App() {
  const [gifts, setGifts] = useState([])

  useEffect(() => {
    // Step 2: Fetch gifts from the API
    const fetchGifts = async () => {
      const response = await fetch('/gifts')
      const data = await response.json()
      setGifts(data)
    }

    fetchGifts()
  }, [])

  return (
    <Router>
      <div className="App">
        <header>
          <div className="header-container">
            <div className="header-left">
              <img src="/logo.png" alt="UnEarthed Logo" />
              <h1>UnEarthed</h1>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Gifts gifts={gifts} />} />
          <Route path="/gift/:id" element={<GiftDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App