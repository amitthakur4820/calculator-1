let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

//buttons.map( button => {
  //  button.addEventListener('click',  (e) => {
  function takeInput(e) {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                  // display.innerText = display.innerText.slice(0, -1);
                  display.innerText = display.innerText.substring(0, display.innerText.length-1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    }