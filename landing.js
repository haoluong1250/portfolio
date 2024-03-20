const div = document.querySelector(".landingtext");
const text = "I'm Hao: UX designer. Welcome to my portfolio (coded using HTML/CSS & JavaScript). Passionate for all things design, I am currently searching for new career opportunities."

function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i+1), 40);
}   

textTypingEffect(div, text);
