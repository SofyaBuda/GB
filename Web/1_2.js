const tempC = Number.parseInt (prompt ("Введите температуру в Цельсиях"));
let tempF = (9 / 5) * tempC + 32;        
alert (`Цельсий:  ${tempC}       Фаренгейт:  ${tempF.toFixed (1)}`);
//alert ("Цельсий: " +  tempC  + "       Фаренгейт: " + tempF.toFixed (1));


function greeting (name){
    hello = "Привет, " + name + "!";
    return hello;
}
let name = prompt ("Введите имя: ");
console.log (greeting (name));
