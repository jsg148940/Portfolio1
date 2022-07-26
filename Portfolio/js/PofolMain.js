$(document).ready(function(){
  // wheel auto scroll
  $("section").each(function () {
    $(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;
        var moveTop = null;

        if (delta < 0) {
            if ($(this).next() != undefined) {
                moveTop = $(this).next().offset().top;
            }

        } else {
            if ($(this).prev() != undefined) {
                moveTop = $(this).prev().offset().top;
            }
        }
        $("html,body").stop().animate({
            scrollTop: moveTop + 'px'
        }, {
            duration: 0, complete: function () {
            }
        });
      });
  });


  // fade in events
  // about me
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".about_me").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();

  // to top button
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fa-square-caret-up").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();


  // horizontal scroll
  const slider = document.querySelector('.horizontal_slidebar');
  let isMouseDown = false;
  let startX, scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    slider.classList.add('active');

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  });


  // anchor
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

  // nav menu fixed
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