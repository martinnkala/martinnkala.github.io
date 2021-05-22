window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#nav');
    const datefooter = document.querySelector('.time')

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')},false)

    const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December']

    const d = new Date();
    const day = d.getDay()
    const month = d.getMonth()
    const date = d.getDate()
    const year = d.getFullYear()
    datefooter.innerHTML = `${days[day]}, ${date} ${months[month]} ${year}`});