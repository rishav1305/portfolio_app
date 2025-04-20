// This script initializes Vanta.js waves effect on the homepage
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the homepage and if the container exists
    const vantaContainer = document.getElementById('vanta-bg');
    if (!vantaContainer) return;
    
    // Check if VANTA is available (meaning the script loaded properly)
    if (typeof VANTA !== 'undefined') {
      // Initialize waves effect
      VANTA.WAVES({
        el: vantaContainer,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3A3CEB,
        shininess: 60.00,
        waveHeight: 20.00,
        waveSpeed: 0.50,
        zoom: 0.65
      });
    }
  });
})();