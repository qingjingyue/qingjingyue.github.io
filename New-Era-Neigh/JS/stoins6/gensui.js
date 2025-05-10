// 获取元素
const imageBox = document.getElementById('imageBox');
const textBoxes = document.querySelectorAll('.renwuming');

// 为每个文字盒子添加事件监听
textBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        // 获取图片URL
        const imageUrl = box.getAttribute('data-image');

        // 更新图片
        imageBox.style.backgroundImage = `url('${imageUrl}')`;

        // 更新活跃状态
        textBoxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
    });
});