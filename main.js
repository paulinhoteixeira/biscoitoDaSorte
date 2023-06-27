const cookie = document.querySelector("#fortune-cookie");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnNewCookie = document.querySelector("#btnNewCookie");
const cookieMessage = document.querySelector("#cookieMessage");
const cookieMessages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão",
  "Life long learning"
]

function openCookie(e) {
  e.preventDefault();
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
  randomMessage()
}

function randomMessage(){
  let newMessage = Math.floor(Math.random() * cookieMessages.length)
  cookieMessage.innerText = cookieMessages[newMessage]
}

function newCookie(e) {
  e.preventDefault();
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
}


cookie.addEventListener("click", openCookie);

btnNewCookie.addEventListener("click", newCookie);
