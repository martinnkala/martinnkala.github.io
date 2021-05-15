window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.topnav');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')},false)
});