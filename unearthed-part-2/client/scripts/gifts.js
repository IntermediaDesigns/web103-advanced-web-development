
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
    data.map(gift => {
      const card = document.createElement('div');
      card.className = 'card';

      const topContainer = document.createElement('div');
      topContainer.className = 'top-container';
      topContainer.style.backgroundImage = `url(${gift.image})`;

      const bottomContainer = document.createElement('div');
      bottomContainer.className = 'bottom-container';

      const name = document.createElement('h3');
      name.textContent = gift.name;
      bottomContainer.appendChild(name);

      const price = document.createElement('p');
      price.textContent = gift.pricePoint;
      bottomContainer.appendChild(price);

      const audience = document.createElement('p');
      audience.textContent = gift.audience;
      bottomContainer.appendChild(audience);

      const link = document.createElement('a');
      link.textContent = 'Read More >';
      link.href = `/gifts/${gift.id}`;
      link.setAttribute('role', 'button');
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card);
    });
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
