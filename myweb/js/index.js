//时钟
function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12; // 转换为12小时制
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourDegrees = (hour / 12) * 360 + (minute / 60) * 30; // 计算角度
    const minuteDegrees = (minute / 60) * 360 + (second / 60) * 6;
    const secondDegrees = (second / 60) * 360;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`; // 设置角度
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000); // 每秒更新一次时钟

/*-------------隐藏页面----------------*/
function hiddenPage() {
    const hiddenPage = document.querySelector('#hidden-page');
    const menuButton = document.querySelector('#menu-button');

    menuButton.addEventListener('click', function () {
        hiddenPage.classList.toggle('active');
    });
}
hiddenPage();

/*-------------隐藏页面选项切换-------------- */
function hiddenPageOptionSwitch() {
    const container = document.querySelector('.container');
    const options = Array.from(container.querySelectorAll('#option'))
    const boxs = container.querySelectorAll('.box')

    options.forEach(option => {
        option.addEventListener('mouseenter', () => {
            options.forEach(f => {
                f.classList.remove('colorChange')
            })
            option.classList.add('colorChange')



            boxs.forEach(b => {
                b.style.opacity = 0
                b.classList.remove('active')
            })
            const optionNumber = option.dataset.id
            const box = container.querySelector(`.box${optionNumber}`)
            box.classList.add('active')

            setTimeout(() => {
                box.style.opacity = 1
            }, 300);

        })
    })
}
hiddenPageOptionSwitch();

/*-------------隐藏页面第三个盒子字母消失----------*/
function hiddenPageLetterDisappear(params) {
    const box3Contain = document.querySelector('.box3')
    const hidden = box3Contain.querySelector('.hidden')
    const letters = box3Contain.querySelectorAll('#letter')
    const buttom = box3Contain.querySelector('.desert-buttom')


    buttom.addEventListener('mouseenter', function () {
        hidden.classList.add('active')

        letters.forEach(letter => {
            letter.classList.add('transparent')
        })
    })
}
hiddenPageLetterDisappear();

/*------------隐藏页面第四个盒子图片滑动-----------*/
function hiddenPageImageSlide() {
    const box4 = document.querySelector('.box4');
    const image = document.querySelector('.box4-image');

    let isDragging = false;
    let startX;
    let scrollLeft;

    box4.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - box4.offsetLeft;
        scrollLeft = box4.scrollLeft;
        image.style.cursor = 'grabbing';
    });

    box4.addEventListener('mouseleave', () => {
        isDragging = false;
        image.style.cursor = 'grab';
    });

    box4.addEventListener('mouseup', () => {
        isDragging = false;
        image.style.cursor = 'grab';
    });

    box4.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();//保证拖拽正常运行
        const x = e.pageX - box4.offsetLeft;
        const walk = (x - startX) * 3;
        
        box4.scrollLeft = scrollLeft - walk;
    });
}
hiddenPageImageSlide();

/*----------------section1 背景和滑块移动------------*/
function section1BackgroundAndSlidderMove() {
    const slider = document.querySelector(".slider");
    const button = document.querySelector(".button");
    const bgAll = document.querySelector(".bg-all");

    let isDragging = false;

    button.addEventListener("mousedown", e=> {
        isDragging = true;
    });

    document.addEventListener("mouseup", () =>{
        isDragging = false;
    });

    slider.addEventListener("mousemove", e => {
        if (!isDragging) return;
        e.preventDefault();
        //滑块的左三分之一点位和四分之一点位
        const leftPoint = slider.offsetLeft - slider.offsetWidth / 6;
        const rightPoint = slider.offsetLeft + slider.offsetWidth / 6;
        if (e.pageX < leftPoint) {
            button.style.left = '0px';
            bgAll.style.left = '0%';
        }
        else if(e.pageX > rightPoint) {
            button.style.left = '347px';
            bgAll.style.left = '-200%';
        }else{
            button.style.left = '163px'
            bgAll.style.left = '-100%';
        }
    });


}
section1BackgroundAndSlidderMove();

