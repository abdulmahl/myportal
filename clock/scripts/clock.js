

function updatedClock() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const clock = document.querySelector('#clock');
    clock.textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(updatedClock, 1000);