const navbarToggler = document.querySelector('#navbarToggler');
const navbarSupportedContent = document.getElementById('navbarSupportedContent');

navbarToggler.addEventListener('click', function() {
    navbarSupportedContent.classList.toggle('show');
});
