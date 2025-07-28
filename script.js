function openBirthday() {
  window.open("envelope.html", "_blank");
}


const message = "Happiest Birthday, Chini! 💖🎉\n\nYou make the world brighter.\nNever stop being you. 🌸";

let index = 0;
const speed = 50;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("message").textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;


document.addEventListener("DOMContentLoaded", function () {
  const message = `happy birthday, chin!! I hope u enjoyed your day kasi ako naenjoy ko yung moment na 
nakilala kita hahahbhfiuhweiuh pereng shere charot.
you deserve all the good things that happen to you, proud of you always!
happy birthdayyy, happy pill! illegal business na soon para pumaldoks na agad HAHAHA eme happy birthdayyy!!🩷🎉`;

  const target = document.getElementById("typedMessage");
  let index = 0;

  function typeChar() {
    if (index < message.length) {
      target.textContent += message.charAt(index);
      index++;
      setTimeout(typeChar, 25); // speed of typing in ms
    }
  }

  typeChar();
});

//confetti
// 🎉 First: Confetti pops
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

// 😄 Then: Falling emojis after 1.5 seconds
setTimeout(() => {
  startEmojiRain();
}, 1500);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s"; // 2–5s
  document.getElementById("heart-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);




