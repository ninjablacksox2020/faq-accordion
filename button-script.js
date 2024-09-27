/* click or tab and space/enter to activate paragraph elements */

document.addEventListener('DOMContentLoaded', function () {
  const icons = document.querySelectorAll('.icon-plus');

  icons.forEach(icon => {
    
    icon.addEventListener('click', toggleAnswer);
    icon.addEventListener('keydown', function (event) {
      
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); 
        toggleAnswer.call(this);
      }
    });
  });

  function toggleAnswer() {
    const iconId = this.getAttribute('data-icon');
    const answer = document.querySelector(`p[data-answer="${iconId}"]`);

    
    if (answer.style.display === "block") {
      answer.style.display = "none";
      this.src = "assets/images/icon-plus.svg";
    } else {
      answer.style.display = "block";
      this.src = "assets/images/icon-minus.svg";
    }
  }
});