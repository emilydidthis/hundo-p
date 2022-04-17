const log = document.getElementById('log');

document.addEventListener('keydown', logKey);

response_data = [];

function logKey(e) {
    let timestamp = new Date();
    response_data.push([timestamp, e.key]);
    console.log(response_data)
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
            // check to see if the previous character was command
            // if (response_data.length > 1) {
            //     if (response_data[response_data.length-2][1] == "Meta"){
            //         break;
            //     }
            // }
            // else {
                log.textContent += `${e.key}`;
            //}
    }

    console.log(e)
    console.log(e.code)
    console.log(e.key)
    console.log(e.keyCode)
} 