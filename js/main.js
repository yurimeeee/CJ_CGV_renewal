/* ADD BANNER */

let adClose = document.querySelector('.ad_close'),
    ad =  document.querySelector('.ad_wrap');

adClose.addEventListener('click',()=>{
  ad.classList.toggle('active');
  if(ad.classList.contains('active')){
    adClose.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
  } else{
    adClose.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  }
})
    

// adClose.addEventListener('click',()=>{
//     if (ad.style.display === "none") {
//         ad.style.display = "block";
//         adClose.innerHTML = '<i class="fa-solid fa-xmark"></i>'
//       } else {
//         ad.style.display = "none";
//         adClose.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
//       }
    
// })





/* MENU DROPDOWN */

let mainMenu = document.querySelectorAll('.menu li'),
    subMenu = document.querySelectorAll('.submenu'),
    menuDown = document.querySelector('.menu_bg'),
		menuHeight = menuDown.offsetHeight;


let subMenuHeight = 0;
subMenu.forEach(item=>{
	if(item.offsetHeight > subMenuHeight){
		subMenuHeight = item.offsetHeight;
	}
	})
let menuTotalHeight = `${menuDown.offsetHeight + subMenuHeight + 80}px`


mainMenu.forEach(item=>{
	item.addEventListener('mouseover',()=>{
		menuDown.style.height = menuTotalHeight;
	});
	item.addEventListener('mouseout',()=>{
		menuDown.style.height = `${menuHeight}px`;
	});
})


/* MENU STICKY */

let menuSticky = document.querySelector('.main_menu'),
    menuWrap = document.querySelector('.menuwrap')
    menuLi = document.querySelectorAll('.menu_li a'),
    menuScroll = menuDown.offsetTop,
    scrollAmout = window.scrollY;


window.addEventListener('scroll',()=>{
  console.log(window.scrollY)
    if(window.scrollY > (menuScroll)){
      menuWrap.classList.add('sticky');
      menuSticky.style.background = "linear-gradient(to right, rgb(215, 67, 87), rgb(241,79,58) 59%, rgb(239, 100, 47))";
      for(li of menuLi){
        li.style.color = "#fff";
      }
    } else {
      menuWrap.classList.remove('sticky');
      menuSticky.style.background = "#fff";
      for(li of menuLi){
        li.style.color = "";
      }
    }
})


/* SEARCH MODAL */

let lightbox = document.querySelector('#lightbox'),
    modalOpen = document.querySelector('#modal_open'),
    modalClose = document.querySelector('.modal_close'),
    modal = document.querySelector('.modal_box');


modalOpen.addEventListener('click',()=>{
  modal.style.display = 'block';
  lightbox.classList.add('visible');
});
modalClose.addEventListener('click',()=>{
  modal.style.display = 'none';
  lightbox.classList.remove('visible');
});