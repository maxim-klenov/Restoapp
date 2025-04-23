const closeButton = document.querySelector('.delivery-btn');
const deliveryInfo = document.querySelector('.delivery');
closeButton.addEventListener('click', () => {
  deliveryInfo.remove();
})