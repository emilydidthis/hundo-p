let textarea = document.getElementById('test-target');
let response = document.getElementById('response');
let duration = document.getElementById('duration');

let response_data = []

textarea.addEventListener('input', (e) => {
    let timestamp = new Date();
    response_data.push([timestamp, e.data]);
    console.log(e.data);
    console.log(e.code)
    console.log(`Key "${e.data}" input  [event: input]`);
    console.log(response_data);

  });

setInterval(updateLog, 10);

function updateLog(){
    let userInput = textarea.value;
    //console.log("userinput", userInput);
    response.innerHTML = userInput;
    if (response_data.length > 0) {
        let endTime = response_data[response_data.length -1][0];
        let startTime = response_data[0][0];
        let totalTime = Math.abs(endTime-startTime)
        console.log(totalTime);
        duration.innerHTML = totalTime/1000; //milliseconds
    }
    
}