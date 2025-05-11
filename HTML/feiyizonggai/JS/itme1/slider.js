document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.slider-dot');
    const sliderContainer = document.querySelector('.slider-container');
    let currentIndex = 0;
    let autoPlayTimer = null;
    const interval = 3000;

    // 初始化当前索引
    images.forEach((img, index) => {
        if (img.classList.contains('active')) currentIndex = index;
    });

    // 自动播放函数（核心逻辑）
    const autoPlay = () => {
        currentIndex = (currentIndex + 1) % images.length;
        switchToImage(currentIndex);
        // 递归调用setTimeout，确保间隔准确
        autoPlayTimer = setTimeout(autoPlay, interval);
    };

    // 切换图片核心函数
    const switchToImage = (index) => {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        images[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    };

    // 导航点点击事件（重置定时器）
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const targetIndex = parseInt(e.currentTarget.dataset.index);
            switchToImage(targetIndex);
            stopAutoPlay(); // 清除旧定时器
            autoPlayTimer = setTimeout(autoPlay, interval); // 重新设置新定时器
        });
    });

    // 鼠标悬停控制（使用setTimeout的清除方式）
    const stopAutoPlay = () => {
        clearTimeout(autoPlayTimer); // 注意：这里改为clearTimeout
    };
    const startAutoPlay = () => {
        stopAutoPlay(); // 避免重复启动
        autoPlayTimer = setTimeout(autoPlay, interval); // 初始延迟interval后启动
    };

    // 鼠标移入暂停，移出恢复
    // sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    // sliderContainer.addEventListener('mouseleave', startAutoPlay);

    // 初始化自动播放（首次延迟interval后启动）
    startAutoPlay();
});
