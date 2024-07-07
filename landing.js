const div = document.querySelector(".landingtext");
const text = "I'm Hao. Welcome to my portfolio, where I strive to design creative and intuitive experiences."

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
