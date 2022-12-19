// 마우스포인트 애니매이션
// const cursor = document.querySelector(".CursorEffect");
// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;

//   cursor.style.top = y + "px";
//   cursor.style.left = x + "px";
//   cursor.style.displye = "block";
// });

// document.addEventListener("mouseover", () =>{
//   cursor.style.displye = "none";
// });

// 움직이는 원 애니메이션
// const text = document.querySelector('.text p');
// text.innerHTML = text.innerText.split("").map(
// (char, i) =>
// `<span style= "transform:rotate(${i * 10.5}deg)">${char}</span>`
// ).join("")

// Fade in 
// $(window).scroll(function() {
//   var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//   $(".about_me").each(function() {
//     var objectBottom = $(this).offset().top + $(this).outerHeight();
    
//     if (objectBottom < windowBottom) { 
//       if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
//     } else { 
//       if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//     }
//   });
// }).scroll();

// Fade out 애니메이션
$(window).scroll(function() {
  $(".about_me").css("opacity",1 - $(window).scrollTop() /250);

});

// // 처음으로 가기 애니메이션
// $(window).scroll(function() {
//   var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//   $(".fa-square-caret-up").each(function() {
//     var objectBottom = $(this).offset().top + $(this).outerHeight();
    
//     if (objectBottom < windowBottom) { 
//       if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//     } else {
//       if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//     }
//   });
// }).scroll();

// // 가로 스크롤 메뉴
// const slider = document.querySelector('.horizontal_slidebar');
// let isMouseDown = false;
// let startX, scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isMouseDown = true;
//   slider.classList.add('active');

//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//   isMouseDown = false;
//   slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//   isMouseDown = false;
//   slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//   if (!isMouseDown) return;

//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 1;
//   slider.scrollLeft = scrollLeft - walk;
// });

/**
* By Alvaro Trigo 
* Follow me on Twitter: https://twitter.com/imac2
*/
(function(){
  init();

  var g_containerInViewport;
  function init(){
      setStickyContainersSize();
      bindEvents();
  }

  function bindEvents(){
      window.addEventListener("wheel", wheelHandler);        
  }

  function setStickyContainersSize(){
      document.querySelectorAll('.sticky-container').forEach(function(container){
          const stikyContainerHeight = container.querySelector('.horizontal_slidebar').scrollWidth;
          container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
      });
  }

  function isElementInViewport (el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt){
      
      const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
          return isElementInViewport(container);
      })[0];

      if(!containerInViewPort){
          return;
      }

      var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
      let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

      if(g_canScrollHorizontally){
          containerInViewPort.querySelector('.horizontal_slidebar').scrollLeft += evt.deltaY;
      }
  }
})();


//메뉴 앵커
$("#main").click(function(){
$('html,body').animate({
  scrollTop:$((this).attr('href')).offset().top
},5000);
return false;
});
$("#aboutme").click(function(){
  $('html,body').animate({
    scrollTop:$((this).attr('href')).offset().tops
  },5000);
  return false;
}); 
$("#pofolsite").click(function(){
  $('html,body').animate({
    scrollTop:$((this).attr('href')).offset().top
  },5000);
  return false;
});
$("#sitmap").click(function(){
  $('html,body').animate({
    scrollTop:$((this).attr('href')).offset().top
  },5000);
  return false;
});

// 
var Offset = $('.nav_menu').offset();
$(window).scroll(function(){
  if($(document).scrollTop() > Offset.top ){
    $('.nav_menu').addClass('fixed');
  }
  else {
    $('.nav_menu').removeClass('fixed');
  }
});

// skill_text toggle
$(".btn").on("click",function(e) {
  e.preventDefault();
  $(".content").hide();
  $("#"+this.id).show();
});

// fade in top _ page2
  function reveal4() {
  var reveals = document.querySelectorAll(".nav_menu");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("add2");
    } else {
      reveals[i].classList.remove("add2");
    }
  }
}
window.addEventListener("scroll", reveal4);

  // fade in top _ page2
function reveal2() {
  var reveals = document.querySelectorAll(".skills");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("add");
    } else {
      reveals[i].classList.remove("add");
    }
  }
}
window.addEventListener("scroll", reveal3);

// fade in top _ page2
  function reveal3() {
  var reveals = document.querySelectorAll(".about_me");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("add");
    } else {
      reveals[i].classList.remove("add");
    }
  }
}
window.addEventListener("scroll", reveal2);

// fade in top _ page3
function reveal() {
  var reveals = document.querySelectorAll(".pofol");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// back to top button set
const backToTop = document.getElementById('backtotop');
const checkScroll=()=>{
  let pageOffset = window.pageYOffset;

  if(pageYOffset !== 0){
      backToTop.classList.add('show');  
  }else{
      backToTop.classList.remove('show'); 
  }
}
const moveBackToTop=()=>{
    if(window.pageYOffset > 0 ){
        window.scrollTo({top:0, behavior:"smooth"});
    }
}
window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click',moveBackToTop);
});