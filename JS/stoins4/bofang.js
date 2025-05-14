const imgs = document.querySelectorAll('.media-img');
const videos = document.querySelectorAll('.media-video');

imgs.forEach((img, index) => {
    img.addEventListener('click', function () {
    this.style.display = 'none';
    videos[index].style.display = 'block';
    videos[index].play();
    });
});

videos.forEach((video, index) => {
    video.addEventListener('ended', function () {
    imgs[index].style.display = 'block';
    this.style.display = 'none';
    });
});