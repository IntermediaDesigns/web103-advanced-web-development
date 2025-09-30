// Select the header tag
const header = document.querySelector('header');

// Create navigation element
const nav = document.createElement('nav');

// Create first ul for brand/logo section
const brandUl = document.createElement('ul');

// Create brand li
const brandLi = document.createElement('li');

// Create brand link
const brandLink = document.createElement('a');
brandLink.href = '/';

// Create logo image
const headerLogo = document.createElement('img');
headerLogo.src = '/logo.png';
headerLogo.alt = 'UnEarthed Logo';

// Create title
const headerTitle = document.createElement('strong');
headerTitle.textContent = 'UnEarthed';

// Append logo and title to brand link
brandLink.appendChild(headerLogo);
brandLink.appendChild(headerTitle);

// Append brand link to brand li
brandLi.appendChild(brandLink);

// Append brand li to brand ul
brandUl.appendChild(brandLi);

// Create second ul for navigation buttons
const navUl = document.createElement('ul');

// Create navigation li
const navLi = document.createElement('li');

// Create Home button
const headerButton = document.createElement('a');
headerButton.textContent = 'Home';
headerButton.href = '/';
headerButton.setAttribute('role', 'button');

// Append button to nav li
navLi.appendChild(headerButton);

// Append nav li to nav ul
navUl.appendChild(navLi);

// Append both uls to nav
nav.appendChild(brandUl);
nav.appendChild(navUl);

// Append nav to header
header.appendChild(nav);

