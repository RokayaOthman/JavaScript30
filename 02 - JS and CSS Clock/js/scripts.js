
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function playDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondDegrees = (seconds / 60) * 360 + 90;
    const minuteDegrees = (minutes / 60) * 360 + 90;
    const hourDegrees = (hours / 12) * 360 + 90;

    // transform is a property not a function
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(playDate, 1000);
playDate();
soundButton = document.querySelector('.sound-button');
let tickingSound = document.querySelector("#audio");


soundButton.addEventListener("click", () => {
    if (tickingSound.paused) {
        tickingSound.play();
        soundButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
    else {
        tickingSound.pause();
        soundButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
         
        
    }
}); 

