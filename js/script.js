const text = ["Never Give Up","Keep Coding","Dream Big","Future Developer"];
const button = document.querySelector(".btn");
let textHtml = document.querySelector("#text");
btn.addEventListener("click",changeUI);


function changeUI(){
    const randomText = Math.floor(Math.random()*text.length);
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const newColor = `rgb(${red}, ${ green}, ${blue})`;
    const newBgColor = `rgb(${green}, ${ blue}, ${red})`;
    document.body.style.backgroundColor=newBgColor;
    button.style.backgroundColor=newColor;
    button.style.color=newBgColor;
    textHtml.style.color=newColor;
    textHtml.textContent=text[randomText];
    
}