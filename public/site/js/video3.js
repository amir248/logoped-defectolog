const count = {};
let gets;

function choseVideo(gets) {
  // Управление подсветкой индикаторов (span в .display)
  const spans = document.querySelectorAll('.display > span');
  spans.forEach((span, index) => {
    span.style.background = index === gets - 1 ? 'black' : 'grey';
  });

  // Управление видимостью видео
  const videos = document.querySelectorAll('.video > video, .video > div > video');
  videos.forEach((video, index) => {
    video.parentElement.style.display = index === gets - 1 ? 'block' : 'none';
  });
}

// Инициализация счётчика
count.click = 1;

// Кнопка «предыдущее» (левый символ <)
document.querySelector('.video > span:nth-child(1)').addEventListener('click', () => {
  count.click--;
  if (count.click <= 0) {
    count.click = 3;
  }
  console.log(count.click);
  choseVideo(count.click);
});

// Кнопка «следующее» (правый символ >)
document.querySelector('.video > span:nth-child(5)').addEventListener('click', () => {
  count.click++;
  if (count.click >= 4) {
    count.click = 1;
  }
  choseVideo(count.click);
});

// Клики по индикаторам (точки внизу)
document.querySelector('.display > span:nth-child(1)').addEventListener('click', () => {
  count.click = 1;
  choseVideo(count.click);
});

document.querySelector('.display > span:nth-child(2)').addEventListener('click', () => {
  count.click = 2;
  choseVideo(count.click);
});

document.querySelector('.display > span:nth-child(3)').addEventListener('click', () => {
  count.click = 3;
  choseVideo(count.click);
});