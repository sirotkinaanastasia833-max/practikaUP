document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      burgerBtn.classList.toggle('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('modal-close');
  const openBtns = document.querySelectorAll('.header_btn, .call_btn, .quiz_card_btn, .about_btn');
  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.querySelector('.modal_form');
  const toast = document.getElementById('success-toast');
  const modal = document.getElementById('booking-modal');
  if (bookingForm && toast && modal) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.remove('active');
      toast.classList.add('show');
      bookingForm.reset();
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    });
  }
});