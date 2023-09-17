

function updatedClock() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const clock = document.querySelector('#clock');
    clock.textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(updatedClock, 1000);

clock.style.backgroundColor = '#1fe374';
clock.style.color = '#00ad6a';
clock.style.padding = '1rem';

