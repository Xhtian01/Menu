const navigation = document.querySelector('.navigation');

const container = document.querySelector('.container');

container.addEventListener('click', () => {
  navigation.classList.toggle('active');
  container.classList.toggle('active');
});
