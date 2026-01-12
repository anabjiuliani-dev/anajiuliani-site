// Simple interactions: smooth scroll & animated nav background
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if(window.scrollY > 50) {
    nav.style.backgroundColor = '#fff8f3';
    nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  } else {
    nav.style.backgroundColor = '#fff';
    nav.style.boxShadow = 'none';
  }
});
