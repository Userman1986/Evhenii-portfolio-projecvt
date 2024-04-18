// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  // Function to scroll to top when the "Home" button is clicked
  function scrollToTop() {
    const headerOffset = document.querySelector('.page-header').offsetTop;
    window.scrollTo({ top: headerOffset, behavior: 'smooth' });
}