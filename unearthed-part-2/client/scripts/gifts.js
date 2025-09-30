
const renderGifts = async () => {
  try {
    const response = await fetch("/gifts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";

  if (data) {
    // Create a grid container for the cards
    const grid = document.createElement('div');
    grid.className = 'grid';

    data.map(gift => {
      const card = document.createElement('article');

      const topContainer = document.createElement('div');
      topContainer.className = 'card-image';

      // Set up backup images for specific gifts
      const backupImages = {
        2: '/nikepanda.jpg',          // Nike Panda Dunks
        8: '/legoflower.webp',        // Lego Flower Bouquet Kit
        5: '/RazerKittyHeadset.webp', // Razer Kitty Headset
        9: '/switchlite.webp'         // Nintendo Switch Lite
      };

      // Try to load original image, fallback to backup if it fails
      const testImg = new Image();
      testImg.onload = function() {
        topContainer.style.backgroundImage = `url(${gift.image})`;
      };
      testImg.onerror = function() {
        if (backupImages[gift.id]) {
          console.log('Using backup image for gift ID:', gift.id);
          topContainer.style.backgroundImage = `url(${backupImages[gift.id]})`;
        } else {
          topContainer.style.backgroundImage = `url(${gift.image})`;
        }
      };
      testImg.src = gift.image;

      const bottomContainer = document.createElement('div');
      bottomContainer.className = 'card-content';

      const name = document.createElement('h3');
      name.textContent = gift.name;
      bottomContainer.appendChild(name);

      const metaContainer = document.createElement('div');
      metaContainer.className = 'card-meta';

      const price = document.createElement('div');
      price.className = 'card-price';
      price.textContent = gift.pricePoint;
      metaContainer.appendChild(price);

      const audience = document.createElement('div');
      audience.className = 'card-audience';
      audience.textContent = gift.audience;
      metaContainer.appendChild(audience);

      bottomContainer.appendChild(metaContainer);

      const link = document.createElement('a');
      link.className = 'card-button';
      link.textContent = 'Read More';
      link.href = `/gifts/${gift.id}`;
      link.setAttribute('role', 'button');
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      grid.appendChild(card);
    });

    mainContent.appendChild(grid);
  } else {
    const message = document.createElement('h2');
    message.textContent = 'No Gifts Available 😞';
    mainContent.appendChild(message);
  }
  } catch (error) {
    console.error('Error loading gifts:', error);
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    const errorMessage = document.createElement('h2');
    errorMessage.textContent = 'Error loading gifts. Please try again later.';
    mainContent.appendChild(errorMessage);
  }
};

   // Extract the portion of the URL after the '/'
   const requestedUrl = window.location.pathname.slice(1);

   if (requestedUrl) {
     window.location.href = '../404.html';
   } else {
     renderGifts();
   }
