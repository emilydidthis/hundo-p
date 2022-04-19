const log = document.getElementById('log');
const live = document.getElementById('live-response')
// everytime a key is pressed, the time is recorded
// only add a letter if the time between the keypresses is greater than 1 second

previousTime = new Date();

document.addEventListener('keydown', logKey);

function logKey(e) {
    currentTime = new Date();
    switch(e.key){
        case "Space":
            break;
        case "Meta":
            break;
        case "Shift":
            break;
        case "Alt":
            break;
        case "Control":
            break;
        case "Enter":
            log.textContent += "\r\n";
            break;
        case "Backspace":
            log.textContent = log.textContent.substring(0,log.textContent.length-1);
            break;
        default:
            if (currentTime - previousTime > 500){
               log.textContent += `${e.key}`;
               previousTime = currentTime;
            }
            live.textContent += `${e.key}`;

    }

    console.log(e)
    console.log(e.code)
    console.log(e.key)
    console.log(e.keyCode)
} 