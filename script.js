let messages = [
  { text: "谢谢你一直的帮助 ❤️", author: "小李" },
  { text: "永远记得我们的下午茶时光 🍵", author: "Jenny" },
  { text: "愿你前程似锦 ✨", author: "阿龙" }
];

function loadMessages() {
  messages.forEach(createBubble);
}

function createBubble(msgObj) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerText = `${msgObj.text}\n- ${msgObj.author}`;
  bubble.style.left = Math.random() * 90 + 'vw';
  bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
  bubble.onclick = () => showModal(msgObj);
  document.getElementById('bubble-container').appendChild(bubble);
  setTimeout(() => bubble.remove(), 15000);
}

function showModal(msg) {
  const modal = document.getElementById("popup");
  modal.innerHTML = `<h2>${msg.author}</h2><p>${msg.text}</p>`;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("popup").style.display = "none";
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  music.paused ? music.play() : music.pause();
}

document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const author = document.getElementById("author").value;
  const text = document.getElementById("message").value;
  if (author && text) {
    const newMsg = { text, author };
    messages.push(newMsg);
    createBubble(newMsg);
    this.reset();
  }
});

setInterval(() => {
  if (messages.length > 0) {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    createBubble(msg);
  }
}, 2000);

loadMessages();
