var mybutton = document.getElementById("home");
function Home() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const text = document.getElementById("typing1");
const phrases = [
  "Welcome to my online portfolio, made by me! :)",
  "I used HTML/CSS and Javascript, and I'm currently working on adding a back-end using Django! :D",
  "I enjoy building things! :o",
];

let one = 0;
let two = 0;
let currentPhrase = [];
let del = false;
let end = false;

function loop() {
  end = false;
  text.innerHTML = currentPhrase.join("");

  if (one < phrases.length) {
    if (!del && two <= phrases[one].length) {
      currentPhrase.push(phrases[one][two]);
      two++;
      text.innerHTML = currentPhrase.join("");
    }

    if (del && two <= phrases[one].length) {
      currentPhrase.pop(phrases[one][two]);
      two--;
      text.innerHTML = currentPhrase.join("");
    }

    if (two == phrases[one].length) {
      end = true;
      del = true;
    }

    if (del && two === 0) {
      currentPhrase = [];
      del = false;
      one++;
      if (one === phrases.length) {
        one = 0;
      }
    }
  }

  const fast = 50;
  const normal = 100;

  //if we're deleting, we want to speed up (fast) --> otherwise we'll use normal speed
  const time = end ? 2000 : del ? fast : normal;
  setTimeout(loop, time);
}

loop();
