$(document).ready(function(){


 
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
    $(".navigation-items").toggleClass("nav-swipe")
	});
});




// -------------------------------------------
var btn = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(".home-nav").on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// -----------------------------------------------------------------

let sid_para = "Experienced Web-developer with advance knowledge of frontend designs and responsive UIs. Working as a frontend developer for more than 2 years now and has acquired extensive knowledge of trends in market."

let varsha_para = "Innovative Web Developer with experience in building quality websites using HTML, JavaScript, WordPress and CSS. Aspiring to combine broad background with strong technical skills to excel as a FullStack Developer."

let ajay_para = "Professional Android developer with years of experience and many happy clients. Successfully completed over 20 projects. Certificated java and kotlin expert."



$(".read-more").click(function(){
    $(".modal-card-stock").addClass("modal-visible")
})

$(".modal-cross").click(function(){
    $(".modal-card-stock").removeClass("modal-visible")
})
$(".sid").click(function(){
    $(".modal-name").text("Sidharth Pansari")
    $(".modal-skill").text("UI/UX Designer")
    $(".modal-para").text(sid_para)
    $(".modal-quote").text('"Design adds value faster than it adds costs."')
    $(".modal-card-image").attr("src","./img/sid.png")
    $(".linkedin").attr("href","https://www.linkedin.com/in/sidharth-pansari-7aab5a207")
    $(".github").attr("href","https://github.com/sidharth9661")
    $(".envelope").attr("href","mailto:sidharth.pansari07@gmail.com")

})

$(".varsha").click(function(){
    $(".modal-name").text("Varsha Singh")
    $(".modal-skill").text("Fullstack Developer")
    $(".modal-para").text(varsha_para)
    $(".modal-quote").text('“Experience is the name everyone gives to their mistakes.”')
    $(".modal-card-image").attr("src","./img/varsha.png")
    $(".linkedin").attr("href","https://www.linkedin.com/in/varsha-singh-350a83137")
    $(".github").attr("href","https://github.com/Varsha2808")
    $(".envelope").attr("href","mailto:varsha280802@gmail.com")

})

$(".tanishq").click(function(){
    $(".modal-name").text("Ajay Sharma")
    $(".modal-skill").text("Android Developer")
    $(".modal-para").text(ajay_para)
    $(".modal-quote").text('“ In order to be irreplaceable, one must always be different”')
    $(".modal-card-image").attr("src","./img/ajay.png")
    $(".linkedin").attr("href","https://www.linkedin.com/in/ajay-sharma-21744419a")
    $(".github").attr("href","https://github.com/Ajay2238")
    $(".envelope").attr("href","mailto:ajay2238aj@gmail.com")
})


// ----------------skill bars------------------

var skills = {
    ht: 90,
    cs: 80,
    js: 80,
    rc: 70,
    wp:90,
    nj: 80,
    ph:60,
    md:70,
    pp:80,
    ae:80,
    fg:90,
    axd:70,
    ps:90
    
  };
  
  $.each(skills, function(key, value) {
    $("." + key).animate(
      {
        width: value + "%"
      },
      3000,
      function() {
        $(".speech-bubble").fadeIn();
      }
    );
  }); 

 

// --------------------------------------progressbar
 
$(".row1").toggleClass("row-visible")
$(".dropdown-button-1").click(function(){
  $(".row1").slideToggle(700)
  $(".row1").toggleClass("row-visible")
  $(".row2 , .row3 , .row4").slideUp(0)
  $(".down-icon-1").toggleClass("fa-angle-down")
  $(".down-icon-1").toggleClass("fa-angle-up")
 
  $(".down-icon-2 , .down-icon-3 , .down-icon-4").removeClass("fa-angle-up")
  $(".down-icon-2 , .down-icon-3 , .down-icon-4").addClass("fa-angle-down")


})
$(".dropdown-button-2").click(function(){
  $(".row2").slideToggle(700)
  $(".row2").toggleClass("row-visible")
  $(".row1 , .row3 , .row4").slideUp(0)
  $(".row1").removeClass("row-visible")
  $(".down-icon-2").toggleClass("fa-angle-up")
  $(".down-icon-1 , .down-icon-3 , .down-icon-4").removeClass("fa-angle-up")
  $(".down-icon-1 , .down-icon-3 , .down-icon-4").addClass("fa-angle-down")

})
$(".dropdown-button-3").click(function(){
  $(".row3").slideToggle(700)
  $(".row3").toggleClass("row-visible")
  $(".row2 , .row1 , .row4").slideUp(0)
  $(".row1").removeClass("row-visible")
  $(".down-icon-3").toggleClass("fa-angle-up")
  $(".down-icon-1 , .down-icon-2 , .down-icon-4").removeClass("fa-angle-up")
  $(".down-icon-1 , .down-icon-2 , .down-icon-4").addClass("fa-angle-down")

})
$(".dropdown-button-4").click(function(){
  $(".row4").slideToggle(700)
  $(".row4").toggleClass("row-visible")
  $(".row2 , .row3 , .row1").slideUp(0)
  $(".row1").removeClass("row-visible")
  $(".down-icon-4").toggleClass("fa-angle-up")
  $(".down-icon-1 , .down-icon-2 , .down-icon-3").removeClass("fa-angle-up")
  $(".down-icon-1 , .down-icon-2 , .down-icon-3").addClass("fa-angle-down")
})

$(document).scroll(function(x) {
  
    if($(window).scrollTop()>=50){
      $(".navigation-bar").addClass("sticky");
  }else{
      $(".navigation-bar").removeClass("sticky");
  }

});




  $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  smartSpeed: 1000,
  autoplay:true,
  autoplayTimeout: 3000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$(".year").text(new Date().getFullYear())


// -------------------------------------gsap
gsap.registerPlugin(ScrollTrigger);
var rule = CSSRulePlugin.getRule(".name::after");



gsap.from(".anim1", {opacity: 0,duration: 1, y:-50,stagger:0.2})
gsap.to(rule, {cssRule:{ scaleY:0},duration: 1})
gsap.from(".anim2", {opacity: 0,duration: 0.8, x:-500})
gsap.from(".my-img", {opacity: 0,duration: 0.8, x:50,delay:0.2})


gsap.from(".about-content", {opacity: 0.6,duration: 0.6,scaleX:0.9,scaleY:0.9,scrollTrigger:".about-content",delay:0.2})
gsap.from(".card1", {opacity: 0.1,duration: 1.2, x:160,scaleX:0.9,scaleY:0.9,scrollTrigger:".card-box",delay:0.2})
gsap.from(".card2", {opacity: 0.4,duration: 1.2,scaleX:0.9,scaleY:0.9,scrollTrigger:".card-box",delay:0.2})
gsap.from(".card3", {opacity: 0.1,duration: 1.2, x:-160,scaleX:0.9,scaleY:0.9,scrollTrigger:".card-box",delay:0.2})


gsap.from(".anim3", {opacity: 0,duration: 1, y:-50,stagger:0.2,scrollTrigger:".contact"})

