import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import GiftsController from '../controllers/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', GiftsController.getGifts)

router.get('/:giftId', (req, res) => {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light dark">
    <title>Gift Details</title>
    <link rel="icon" type="image/x-icon" href="/logo.png" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.fuchsia.min.css"
    />
    <link rel="stylesheet" crossorigin href="/assets/index-CxWm0lOG.css">
    <style>
      :root {
        --primary-color: #2563eb;
        --primary-dark: #1d4ed8;
        --secondary-color: #f59e0b;
        --accent-color: #ec4899;
        --background: #f8fafc;
        --surface: #ffffff;
        --text-primary: #1e293b;
        --text-secondary: #64748b;
        --border: #e2e8f0;
        --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      }

      body {
        background: var(--background);
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }

  html, body {
          overflow: hidden;
      }

      nav {
        background: var(--surface);
        box-shadow: var(--shadow);
        position: sticky;
        top: 0;
        z-index: 100;
        border-bottom: 1px solid var(--border);
        padding: 0 2rem;
      }

      nav ul {
        margin: 0;
        padding: 1rem 0;
      }

      nav ul:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      nav ul:first-child li:first-child a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        color: var(--text-primary);
      }

      nav ul:first-child li:first-child img {
        height: 36px;
        width: auto;
      }

      nav ul:first-child li:first-child strong {
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--primary-color);
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      nav a[role="button"] {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.3s ease;
        border: none;
        box-shadow: var(--shadow);
      }

      .gift-info {
        height: calc(100vh - 80px);
        display: flex;
        align-items: flex-start;
        padding: 1rem 0 0 0;
        overflow: hidden;
      }

      .gift-info .grid {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: flex-start;
        width: 100%;
        height: fit-content;
        max-height: calc(100vh - 120px);
      }

      .image-container img {
        width: 100%;
        max-width: 550px;
        max-height: 580px;
        height: auto;
        object-fit: cover;
        border-radius: 1rem;
        box-shadow: var(--shadow-lg);
      }

      .gift-details {
        background: var(--surface);
        padding: 1.25rem;
        border-radius: 1rem;
        box-shadow: var(--shadow-lg);
        border: 1px solid var(--border);
        height: fit-content;
        max-height: calc(100vh - 140px);
        overflow-y: auto;
      }

      .gift-details h1 {
        font-size: 1.75rem;
        font-weight: 800;
        margin-bottom: 0.75rem;
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1.2;
      }

      .gift-details p {
        margin-bottom: 0.5rem;
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.3;
      }

      .gift-details strong {
        color: var(--text-primary);
        font-weight: 700;
      }

      .gift-details span {
        color: var(--primary-color);
        font-weight: 600;
      }

      a[role="button"].secondary {
        background: transparent;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
        font-weight: 600;
      }

      a[role="button"].secondary:hover {
        background: var(--primary-color);
        color: white;
        transform: translateY(-2px);
      }
    </style>
  </head>
  <body>
    <header></header>
    <main class="container gift-info" id="gift-content">
      <div class="grid">
        <div class="image-container">
          <img id="image" src="" alt="Gift Image" />
        </div>
        <div class="gift-details">
          <h1 id="name"></h1>
          <p><strong>Submitted by:</strong> <span id="submittedBy"></span></p>
          <p><strong>Submitted on:</strong> <span id="submittedOn"></span></p>
          <p><strong>Price:</strong> <span id="pricePoint"></span></p>
          <p><strong>Audience:</strong> <span id="audience"></span></p>
          <p><strong>Description:</strong> <span id="description"></span></p>
          <a href="/" role="button" class="secondary">← Back to Gifts</a>
        </div>
      </div>
    </main>

    <script>
      // Header creation script (embedded)
      const header = document.querySelector('header');
      const nav = document.createElement('nav');
      const brandUl = document.createElement('ul');
      const brandLi = document.createElement('li');
      const brandLink = document.createElement('a');
      brandLink.href = '/';
      const headerLogo = document.createElement('img');
      headerLogo.src = '/logo.png';
      headerLogo.alt = 'UnEarthed Logo';
      const headerTitle = document.createElement('strong');
      headerTitle.textContent = 'UnEarthed';
      brandLink.appendChild(headerLogo);
      brandLink.appendChild(headerTitle);
      brandLi.appendChild(brandLink);
      brandUl.appendChild(brandLi);
      const navUl = document.createElement('ul');
      const navLi = document.createElement('li');
      const headerButton = document.createElement('a');
      headerButton.textContent = 'Home';
      headerButton.href = '/';
      headerButton.setAttribute('role', 'button');
      navLi.appendChild(headerButton);
      navUl.appendChild(navLi);
      nav.appendChild(brandUl);
      nav.appendChild(navUl);
      header.appendChild(nav);

      // Gift data loading script (embedded)
      const renderGift = async () => {
        try {
          const requestedID = parseInt(window.location.href.split('/').pop());
          console.log('Requested ID:', requestedID);

          const response = await fetch('/gifts');
          const data = await response.json();
          console.log('Fetched data:', data);

          const giftContent = document.getElementById('gift-content');
          let gift;

          if (data) {
            gift = data.find(gift => gift.id === requestedID);
            console.log('Found gift:', gift);
          }

          if (gift) {
            const img = document.getElementById('image');
            if (img) {
              // Set up backup images for specific gifts
              const backupImages = {
                2: '/nikepanda.jpg',          // Nike Panda Dunks
                8: '/legoflower.webp',        // Lego Flower Bouquet Kit
                5: '/RazerKittyHeadset.webp', // Razer Kitty Headset
                9: '/switchlite.webp'         // Nintendo Switch Lite
              };

              // Try original image first, fallback to backup if it fails
              img.src = gift.image;
              img.onerror = function() {
                if (backupImages[gift.id]) {
                  console.log('Using backup image for gift ID:', gift.id);
                  this.src = backupImages[gift.id];
                  this.onerror = null; // Prevent infinite loop
                }
              };
            }

            const name = document.getElementById('name');
            if (name) name.textContent = gift.name;

            const submittedBy = document.getElementById('submittedBy');
            if (submittedBy) submittedBy.textContent = gift.submittedby;

            const submittedOn = document.getElementById('submittedOn');
            if (submittedOn) {
              const date = new Date(gift.submittedon);
              submittedOn.textContent = date.toLocaleDateString();
            }

            const pricePoint = document.getElementById('pricePoint');
            if (pricePoint) pricePoint.textContent = gift.pricepoint;

            const audience = document.getElementById('audience');
            if (audience) audience.textContent = gift.audience;

            const description = document.getElementById('description');
            if (description) description.textContent = gift.description;

            document.title = gift.name;
          } else {
            console.log('No gift found for ID:', requestedID);
            giftContent.innerHTML = '<h2>No Gifts Available 😞</h2>';
          }
        } catch (error) {
          console.error('Error in renderGift:', error);
          const giftContent = document.getElementById('gift-content');
          if (giftContent) {
            giftContent.innerHTML = '<h2>Error loading gift data</h2>';
          }
        }
      };

      // Run when page loads
      document.addEventListener('DOMContentLoaded', renderGift);
    </script>
  </body>
</html>`;
  res.status(200).send(html);
})

export default router