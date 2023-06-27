let slideWrapper = document.querySelector('.MovieChart_wrap'),
slideContainer = document.querySelector('.MovieChart_slide_wrap'),
slides = document.querySelectorAll('li'),
slideCount = slides.length,
slideWidth = 222,
slideMargin = 40,
slidesPerView = 5,
currentIdx = 0,
prevBtn = slideWrapper.querySelector('.mC_prevBtn'),
nextBtn = slideWrapper.querySelector('.mC_nextBtn'),
video = document.getElementById('eleMental'),
videoPlayBtn = document.querySelector('.playbtn'),
videoPauseBtn = document.querySelector('.pausebtn');

// 예고편 영상 재생
videoPlayBtn.addEventListener('click',()=>{
    video.play();
});
videoPauseBtn.addEventListener('click',()=>{
    video.pause();
});


function moveSlide(num){
    slideContainer.style.left = -num*(slideWidth+slideMargin)+'px';
    currentIdx = num;
}
moveSlide(0);

nextBtn.addEventListener('click',()=>{
    if(currentIdx < slideCount-slidesPerView){    
        moveSlide(currentIdx +5);
    }
});

prevBtn.addEventListener('click',()=>{
    if(currentIdx > 0){    
        moveSlide(currentIdx -5);
    }
});
