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
    datefooter.innerHTML = `${days[day]}, ${date} ${months[month]} ${year}`
    
    const pancake_day = new Date()
    const pan_day = pancake_day.getDay()
    const pday = document.querySelector('.pancakes')
    if (pan_day === 5) {pday.style.display = 'block'}
    else {pday.style.display = 'none'}
    
    
});
    const temp = document.querySelector("#temperature").textContent
    const meas = document.querySelector("#measure")
    const sp = document.querySelector("#speed").textContent
    const windChillFactor = (
        35.74 +
        0.6215 * temp -
        35.75 * sp ** 0.16 +
        0.4275 * temp * sp ** 0.16
      ).toFixed(0);
      meas.textContent = windChillFactor


    console.log(temp, meas, sp)
