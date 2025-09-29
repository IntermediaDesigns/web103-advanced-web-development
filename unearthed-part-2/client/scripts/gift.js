const renderGift = async () => {
    // Parse the ID as an int from the URL
    const requestedID = parseInt(window.location.href.split('/').pop());

    // Fetch the gift data from the /gifts endpoint
    const response = await fetch('/gifts');
    const data = await response.json();

    // Get the gift-content element
    const giftContent = document.getElementById('gift-content');

    // Variable to hold the matching gift
    let gift;

    // If data is not null, find the gift with the matching ID
    if (data) {
        gift = data.find(gift => gift.id === requestedID);
    }

    // Conditionally render the gift data
    if (gift) {
        // Set image src
        const img = document.getElementById('image');
        if (img) img.src = gift.image;

        // Set name
        const name = document.getElementById('name');
        if (name) name.textContent = gift.name;

        // Set submittedBy
        const submittedBy = document.getElementById('submittedBy');
        if (submittedBy) submittedBy.textContent = gift.submittedby;

        // Set submittedOn
        const submittedOn = document.getElementById('submittedOn');
        if (submittedOn) {
            const date = new Date(gift.submittedon);
            submittedOn.textContent = date.toLocaleDateString();
        }

        // Set pricePoint
        const pricePoint = document.getElementById('pricePoint');
        if (pricePoint) pricePoint.textContent = gift.pricepoint;

        // Set audience
        const audience = document.getElementById('audience');
        if (audience) audience.textContent = gift.audience;

        // Set description
        const description = document.getElementById('description');
        if (description) description.textContent = gift.description;

        // Set page title
        document.title = gift.name;
    } else {
        // If no gift found, show message
        giftContent.innerHTML = '<h2>No Gifts Available 😞</h2>';
    }
}

// Call the function to render the gift
renderGift();
