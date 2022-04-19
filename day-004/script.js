
async function typeSentence(sentence, delay = 50) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      document.getElementById("sentence").append(letters[i]);
      i++
    }
    return;
  }
  
function waitForMs(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}

let toType1 = "Hi, today I have coded a simple typewriter from scratch. I've coded one before, but the cursor was jank. This one is much better. Just kidding. The cursor is broke. See right."

typeSentence(toType1)
