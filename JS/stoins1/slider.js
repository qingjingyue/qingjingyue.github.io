const images = document.querySelectorAll('.stoil1 img');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
            img.classList.remove('prev');
        } else if (i === (index - 1 + images.length) % images.length) {
            img.classList.add('prev');
            img.classList.remove('active');
        } else {
            img.classList.remove('active', 'prev');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
});

setInterval(() => {
    nextButton.click();
}, 5000);

// 初始显示第一张图片
showImage(currentIndex);