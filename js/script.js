const signupButton = document.querySelector('.signup');
const container = document.querySelector('.container');
const tel = document.querySelector('#tel');
const information = document.querySelector('.information');
const form = document.querySelector('.form');
const form_container = document.querySelector('.form-container');

signupButton.addEventListener('click', function() {
  if(container.classList.contains('wide')) {
    signupButton.classList.remove('wide');
    container.classList.remove('wide');
    container.classList.remove('shrink');
    container.classList.add('deshrink');
    tel.classList.remove('wide');
    information.style.display = 'block';
    // form.style.display = 'none';
    form_container.style.display = 'none';
  } else {
    signupButton.classList.add('wide');
    container.classList.add('wide');
    container.classList.add('shrink');
    container.classList.remove('deshrink');
    tel.classList.add('wide');
    information.style.display = 'none';
    form_container.style.display = 'flex';
    // form.style.display = 'block';
  }
});

