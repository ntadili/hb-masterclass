let current = 0;
const total = 3;

function showVideo(index) {
  for (let i = 0; i < total; i++) {
    const iframe = document.getElementById(`iframe-${i}`);
    const player = new Vimeo.Player(iframe);
    if (i !== index) player.pause().catch(() => {});
    document.getElementById(`video-${i}`).style.display = i === index ? 'block' : 'none';
  }
}

function nextVideo() {
  current = (current + 1) % total;
  showVideo(current);
}

function prevVideo() {
  current = (current - 1 + total) % total;
  showVideo(current);
}

window.addEventListener('DOMContentLoaded', () => {
  showVideo(current);
});