
window.onload = function() {
};      

document.addEventListener(
  "scroll", 
  () => {
    const root = document.querySelector('.storymaps-root');
    
    const rootTop = root.offsetTop;
    const rootHeight = root.offsetHeight;

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const rootBottom = rootTop + rootHeight;

    let percentageScrolled;

    if (scrollPosition + window.innerHeight < rootTop) {
      // root div is below the viewport (unlikely, but still...)
      percentageScrolled = 0;
    } else if (scrollPosition > rootBottom) {
      // root div is above the viewport (also unlikely)
      percentageScrolled = 100;
    } else {
      // root div is partially or fully in view
      const distanceScrolled = scrollPosition + window.innerHeight - rootTop;
      percentageScrolled = (distanceScrolled / rootHeight) * 100;
    }

    // Clamp between 0% and 100%, then round the result to the nearest integer
    percentageScrolled = Math.round(Math.max(0, Math.min(percentageScrolled, 100)));

    // Update the CSS width attribute to reflect scroll percentage
    const navProgressBar = document.querySelector('.bar-container');
    navProgressBar.style.setProperty('--bar-fill-width', percentageScrolled + '%');
  }
);