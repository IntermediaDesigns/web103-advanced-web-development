import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Gifts from './pages/Gifts'
import GiftDetails from './pages/GiftDetails'
import CreateGift from './pages/CreateGift'
import EditGift from './pages/EditGift'
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
            <div className="header-right">
              <Link to="/">
                <button className="homeBtn">HOME</button>
              </Link>
              <Link to="/new">
                <button className="addBtn">+ ADD GIFT</button>
              </Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Gifts gifts={gifts} />} />
          <Route path="/gift/:id" element={<GiftDetails />} />
          <Route path="/new" element={<CreateGift />} />
          <Route path="/edit/:id" element={<EditGift />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App