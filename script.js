const textContainer = document.getElementById('textContainer');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomBlowText() {
    const blowText = document.createElement('div');
    blowText.classList.add('blow-me');
    
    const direction = Math.random() < 0.5 ? 'left' : 'right';
    blowText.classList.add(direction);
    
    blowText.innerText = 'BLOW';
    
    const randomX = getRandomInt(-300, 100); // random number between -30 and 30
    const randomY = getRandomInt(-300, 100); // random number between -30 and 30

    blowText.style.position = `absolute`;
    blowText.style.marginTop = `${randomY}px`; 
    blowText.style.left = `calc(50% + ${randomX}px)`; 

    textContainer.appendChild(blowText);

    setTimeout(() => {
        textContainer.removeChild(blowText);
    }, 1000); 
}

setInterval(generateRandomBlowText, 1000);
setInterval(generateRandomBlowText, 2000);
setInterval(generateRandomBlowText, 3000);
setInterval(generateRandomBlowText, 4000);

const blowButton = document.getElementById('blowButton');
const bdayContainer = document.getElementById('bdayContainer');

blowButton.addEventListener('click', () => {
    textContainer.style.display = 'none';
    blowButton.style.display = 'none';
    bdayContainer.style.display = 'flex';
});
