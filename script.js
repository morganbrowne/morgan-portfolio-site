const text = "Morgan Browne.";
const typingTextElement = document.getElementById('typing-text');

let index = 0;
function typeLetter() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeLetter, 100); // Adjust typing speed here
    } else {
        typingTextElement.style.borderRight = "none"; // Optionally remove the blinking caret after typing finishes
    }
}

typeLetter();

function playPause() {
    var video = document.getElementById("coolVideo");
    var button = document.querySelector(".play-pause");
    if (video.paused) {
        video.play();
        button.textContent = "Pause";
    } else {
        video.pause();
        button.textContent = "Play";
    }
}
