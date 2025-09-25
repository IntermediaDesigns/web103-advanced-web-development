// Select the header tag
const header = document.querySelector('header');

// Create header container
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

// Create left section
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// Create logo image
const headerLogo = document.createElement('img');
headerLogo.src = '/logo.png';
headerLogo.alt = 'UnEarthed Logo';

// Create title
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'UnEarthed';

// Append logo and title to left section
headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

// Create right section
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// Create Home button
const headerButton = document.createElement('button');
headerButton.textContent = 'Home';
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/';
});

// Append button to right section
headerRight.appendChild(headerButton);

// Append left and right sections to container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);


// Append container to header
header.appendChild(headerContainer);

