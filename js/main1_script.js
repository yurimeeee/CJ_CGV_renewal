let slideContainer = document.querySelector('.MovieChart_wrap'),
slideWrapper = document.querySelector('.MovieChart_slide_wrap'),
slides = document.querySelectorAll('.MovieChart_slide_wrap li'),
slideCount = slides.length,
slideWidth = 222,
slideMargin = 40,
slidesPerView = 5,
currentIdx = 0,
prevBtn = document.querySelector('.mC_prevBtn'),
nextBtn = document.querySelector('.mC_nextBtn'),
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



// 무비차트 슬라이드
slides.forEach((slide,idx)=>{
    slide.style.left = `${idx*(slideWidth+slideMargin)}px`
})

function moveSlide(num){
    slideWrapper.style.left = -num*(slideWidth+slideMargin)+'px';
    currentIdx = num;
    moveSlide(0)
    /*
    if(currentIdx === 0){
        prevBtn.classList.add('disabled');
    } else{
        prevBtn.classList.remove('disabled');
    }
    */
}
// moveSlide(0);

nextBtn.addEventListener('click',()=>{
    if(currentIdx < slideCount-slidesPerView){
      moveSlide(currentIdx+5);
    }
  });
  preBtn.addEventListener('click',()=>{
    if(currentIdx > 0){
      moveSlide(currentIdx-5);
    }
  });


