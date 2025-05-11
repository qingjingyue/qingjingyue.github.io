// 选择所有具有 fade-list 类名的元素
const lists = document.querySelectorAll('.list');

// 为每个元素添加滚动事件监听器
lists.forEach((list) => {
    document.addEventListener('scroll', function () {
        const listRect = list.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (listRect.top < windowHeight) {
            const lis = list.getElementsByTagName('li');
            for (let i = 0; i < lis.length; i++) {
                setTimeout(() => {
                    lis[i].classList.add('fade-in');
                }, i * 200);
            }
            // 移除滚动事件监听器，避免重复触发
            // document.removeEventListener('scroll', arguments.callee);
        }
    });
});