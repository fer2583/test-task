const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});


function startCountdown() {
  const targetDate = new Date('2023-12-31T00:00:00Z'); 

  const daysElement = document.getElementById('countdown-days');
  const hoursElement = document.getElementById('countdown-hours');
  const minutesElement = document.getElementById('countdown-minutes');
  const secondsElement = document.getElementById('countdown-seconds');

  const countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
          clearInterval(countdownInterval);
          daysElement.textContent = '0';
          hoursElement.textContent = '0';
          minutesElement.textContent = '0';
          secondsElement.textContent = '0';
      } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          daysElement.textContent = days;
          hoursElement.textContent = hours;
          minutesElement.textContent = minutes;
          secondsElement.textContent = seconds;
      }
  }, 1000); 
}

startCountdown();

const questions = document.querySelectorAll('.faq .question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    question.parentElement.classList.toggle('active');
  });
});