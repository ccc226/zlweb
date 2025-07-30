// 获取所有幻灯片和控制圆点
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.control- dot');

// 当前幻灯片索引
let currentIndex = 0;

// 显示当前幻灯片
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// 切换到下一张幻灯片
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// 自动切换幻灯片
setInterval(nextSlide, 5000);

// 点击控制圆点切换幻灯片
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});
