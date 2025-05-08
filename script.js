const closeButton = document.querySelector('.delivery-btn');
const deliveryInfo = document.querySelector('.delivery');
const headerElement = document.querySelector('.header');
closeButton.addEventListener('click', () => {
  deliveryInfo.classList.add('remove-delivery');
  headerElement.style.transform = 'translateY(-46px)';
  deliveryInfo.setAttribute('inert', '');
})