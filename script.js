// Select all elements with class "dropdown-link"
const dropdownLinks = document.getElementsByClassName('dropdown-link');

// Loop through each dropdown link
for (let i = 0; i < dropdownLinks.length; i++) {
  const link = dropdownLinks[i];

  // Add a click event listener to each link
  link.addEventListener('click', function (event) {
    // Get the dropdown element associated with this link
    const dropdown = document.getElementById('dropdown-nav-links');
    
    // Toggle the display of the dropdown (show/hide)
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    // Prevent default behavior for anchor links (optional)
    event.preventDefault();
  });
}

// mobile navigation
const mobileDrawer = document.querySelector('.mobile-drawer');
const mobileNav = document.getElementById('mobile-nav');

mobileDrawer.addEventListener('click', function (event) {
  mobileNav.style.display = "block";
  // alert('hello world');
  event.preventDefault();
});

const closeMobileNav = document.getElementById('close-mobile-nav');

closeMobileNav.addEventListener('click', function (event) {
  mobileNav.style.display = "none";
  // alert('hello world');
  event.preventDefault();
});

const mobileDropdownNavLink = document.getElementById('mobile-dropdown-link');

mobileDropdownNavLink.addEventListener('click', function (event) {
  const mobileDropdownNavLinks = document.getElementById('mobile-dropdown-nav-links');
  mobileDropdownNavLinks.style.display = "block";
  // alert('hello world');
  event.preventDefault();
});
