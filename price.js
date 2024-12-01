// JavaScript to handle glowing effect on clicked topic
document.querySelectorAll('.topic-link').forEach(item => {
    item.addEventListener('click', function() {
      // Remove the glowing effect from all topics
      document.querySelectorAll('.topic-link').forEach(link => {
        link.classList.remove('glowing');
      });
  
      // Add the glowing effect to the clicked topic
      this.classList.add('glowing');
    });
  });

  document.querySelectorAll('.topic-link').forEach(item => {
    item.addEventListener('click', function(event) {
      // Remove the glowing effect from all topics
      document.querySelectorAll('.topic-link').forEach(link => {
        link.classList.remove('glowing');
      });
  
      // Remove the glowing effect from all headers
      document.querySelectorAll('.section h2').forEach(header => {
        header.classList.remove('glowing');
      });
  
      // Add the glowing effect to the clicked topic link
      this.classList.add('glowing');
  
      // Add the glowing effect to the corresponding section header
      const targetSection = document.querySelector(this.getAttribute('href'));
      const header = targetSection.querySelector('h2');
      header.classList.add('glowing');
    });
  });
  