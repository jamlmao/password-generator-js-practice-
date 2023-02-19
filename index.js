let pass1EL = document.getElementById("pass1-el");
let pass2El = document.getElementById("pass2-el");



const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
"&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwordLength = 12;


function getRandomChar() {
    let randomChar = Math.floor(Math.random()* characters.length)
    return characters[randomChar]
}





function generate() {
    
    let randomPassword = " "
    let randomPassword1= " "
    for (let i = 0; i < pwordLength; i++) {
        randomPassword += getRandomChar()     
        randomPassword1 += getRandomChar()
      
    }
    
    document.getElementById("pass1-el").value = randomPassword
    document.getElementById("pass2-el").value = randomPassword1
    
}









