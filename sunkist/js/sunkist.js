//대슬라이드 시작 -------------------
$(function () {
  $(window).on("load", function () {
    $(".slider").slider({ height: "1080px" });
  });
});
//대슬라이드 끝 -------------------


//소슬라이드 시작---------
$(function () {
  var soslide1 = $("#soslide-div1").bxSlider({
    mode: "horizontal", //수평방향으로 이동합니다.
    speed: 1, //이동속도(500:0.5초)
    pager: false, //페이징표시제어숨김
    moveSlides: 1, //이동슬라이드수
    slideWidth: 1300, //각슬라이드폭
    minSlides: 1, //최소노출슬라이드수
    maxSlides: 2, //최대노출슬라이드수
    slideMargin: 0, //슬라이드간의 간격
    auto: false, //자동슬라이드여부
    autoHover: false, //마우스오버시자동정지
    controls: false, //이전 다음버튼을 숨긴다
  });
  var soslide2 = $("#soslide-ul2").bxSlider({
    mode: "horizontal", //수평방향으로 이동합니다.
    speed: 700, //이동속도(500:0.5초)
    pager: false, //페이징표시제어숨김
    moveSlides: 2, //이동슬라이드수
    slideWidth: 470, //각슬라이드폭
    minSlides: 1, //최소노출슬라이드수
    maxSlides: 2, //최대노출슬라이드수
    slideMargin: 40, //슬라이드간의 간격
    auto: false, //자동슬라이드여부
    autoHover: false, //마우스오버시자동정지
    controls: false, //이전 다음버튼을 숨긴다
  });
  $(".soslide-prev").click(function () {
    soslide1.goToPrevSlide();
    soslide2.goToPrevSlide();
    return false;
  });
  $(".soslide-next").click(function () {
    soslide1.goToNextSlide();
    soslide2.goToNextSlide();
    return false;
  });
});
//소슬라이드 끝------------
//썬키스트 탭 메뉴 시작 ----------------------
  $(function(){
    $(".smallslideul1").hide();
  $(".smallslideul1").first().show();
    $(".fruitslideclick p").click(function(){
      
      $(".fruitslideclick p").removeClass("smallslideother").css({color:"#000"});
      $(this).addClass("smallslideother").css({color:"rgb(236, 67, 0)"});
      
      $(".smallslideul1").hide();
      var smallslide = $(this).attr("rel");
      $("#" + smallslide).show();          
    });
  });
  //썬키스트 탭 메뉴 끝 ----------------------



  //사이드바 시작 --------------------
  $(function () {
    var duration = 400;
    var aside1 = $("aside");
    var asidebutton = aside1.find(".button-sidebar").click(function () {
      aside1.toggleClass("open"); //aside가 open가지고 있다면
      if (aside1.hasClass("open")) {
        aside1
          .stop()
          .animate({ right: "-52px" }, duration, "easeOutBounce");
      } else {
        aside1
          .stop()
          .animate({ right: "-250px" }, duration, "easeOutBounce");
      }
    });
  });
//사이드바 끝 --------------------

//썬키스트 유튜브-------------------------
$(function(){
  

  $(".videop1").click(function(){
    
  
    var youtubevideo = $(this).attr("rel");
    $("#" + youtubevideo).show();          
  });
});
//썬키스트 유튜브-------------------------

//이벤트배너 슬라이드 시작-------------
$(function(){
  var myslider1 = $(".eventmentall").bxSlider({
    mode:"horizontal",//수평방향으로 이동합니다.
    speed:500,//이동속도(500:0.5초)
    pager:false,//페이징표시제어숨김
    moveSlides:1,//이동슬라이드수
    slideWidth:400,//각슬라이드폭
    minSlides:1,//최소노출슬라이드수
    maxSlides:1,//최대노출슬라이드수
    slideMargin:0,//슬라이드간의 간격
    auto:true,//자동슬라이드여부
    autoHover:false,//마우스오버시자동정지
    controls:false,//이전 다음버튼을 숨긴다
    
    
  });
  var myslider2 = $(".eventmain3").bxSlider({
    mode:"horizontal",//수평방향으로 이동합니다.
    speed:500,//이동속도(500:0.5초)
    pager:false,//페이징표시제어숨김
    moveSlides:1,//이동슬라이드수
    slideWidth:300,//각슬라이드폭
    minSlides:1,//최소노출슬라이드수
    maxSlides:1,//최대노출슬라이드수
    slideMargin:0,//슬라이드간의 간격
    auto:true,//자동슬라이드여부
    autoHover:false,//마우스오버시자동정지
    controls:false//이전 다음버튼을 숨긴다
    
  });
  $(".smallslideprev1").click(function(){
    myslider1 .goToPrevSlide();
    myslider2 .goToPrevSlide();
    return false;
  });
  $(".smallslidenext1").click(function(){
    myslider1 .goToNextSlide();
    myslider2 .goToNextSlide();
    return false;
  });
  });
//이벤트배너 슬라이드 끝--------------

//아이콘 토글 시작------
$(function(){
  $(".search-main").hide();
  $(".search-close").click(function(){
    $(".search-main").fadeOut();
  });
  $(".iconimg1").click(function(){
    $(".search-main").fadeIn();
  });
});
//아이콘 토글 끝------- 

//메뉴 제이쿼리 시작-----------------
$(function () {
  $(".sunkistitem").hover(function () {
    $(".sunkistmapimg").hide();
    $(this).siblings(".sunkistmapimg").show();
  });

  $(".amain1").mouseover(function () {
    $(".sunkistmapimg").hide();
  });
});
$(function () {
  $(".sunkistitem").hover(function () {
    $(".divstory").hide();
    $(this).siblings(".divstory").show();
  });

  $(".amain1").mouseover(function () {
    $(".divstory").hide();
  });

  $(function(){
    $(".sunkistitem").hover(function(){
      $(".fumjildiv").hide();
      $(this).siblings(".fumjildiv").show();
    });
    $(".amain1").mouseover(function(){
      $(".fumjildiv").hide();
    });
  });
$(function(){
  $(".amain1").hover(function(){
    $(".introimgdiv").show();
  });
});


});
$(function () {
  $(".sunkistitem").hover(
    function () {
      $(".liproductall").hide();
    });
    $(".amain2").hover(function(){
      $(".liproductall").show();
    });
});
$(function(){
  $(".liitem2,.liitem3,.liitem4").mouseover(function(){
    $(".introimgdiv").hide();
  });
  $(function(){
    $(".liitem1").mouseover(function(){
      $(this).find(".introimgdiv").show();
    });
  });
});
$(function () {
  $(".recipeaa1").hover(function () {
    
    $(this).find(".recipediv22").show();
    
          
  });
  

  $(".amain3").mouseover(function () {
    $(".recipediv22").hide();
  });

  $(".recipeaa2").mouseover(function(){
    $(".recipediv22").hide();
    
  }); 
  $(".recipeaa3").mouseover(function(){
    $(".recipediv22").hide();
    
  }); 
  $(".recipeaa4").mouseover(function(){
    $(".recipediv22").hide();
    
  }); 
  
});
$(function () {
  $(".recipeaa3").hover(function () {
    
    $(this).find(".recipediv22_2").show();
    
          
  });
  

  $(".amain3").mouseover(function () {
    $(".recipediv22_2").hide();
  });
  $(".recipeaa1").mouseover(function () {
    $(".recipediv22_2").hide();
  });
  $(".recipeaa2").mouseover(function () {
    $(".recipediv22_2").hide();
  });
  $(".recipeaa4").mouseover(function () {
    $(".recipediv22_2").hide();
  });

 
});
$(function () {
  $(".recipeaa2").hover(function () { 
    $(this).find(".recipediv22_1").show();
  });
  

  $(".amain3").mouseover(function () {
    $(".recipediv22_1").hide();
  });
  $(".recipeaa1").mouseover(function () {
    $(".recipediv22_1").hide();
  });
  $(".recipeaa3").mouseover(function () {
    $(".recipediv22_1").hide();
  });
  $(".recipeaa4").mouseover(function () {
    $(".recipediv22_1").hide();
  });
  
});
$(function () {
  $(".recipeaa4").hover(function () { 
    $(this).find(".recipediv22_3").show();
  });
  

  $(".amain3").mouseover(function () {
    $(".recipediv22_3").hide();
  });
  $(".recipeaa1").mouseover(function () {
    $(".recipediv22_3").hide();
  });
  $(".recipeaa2").mouseover(function () {
    $(".recipediv22_3").hide();
  });
  $(".recipeaa3").mouseover(function () {
    $(".recipediv22_3").hide();
  });
  
});
$(function(){
  $(".sunkistitem,.sunkistitem-gong").hover(function(){
    $(".mundiv").hide();
  });
  $(".amain5").hover(function(){
    $(".mundiv").show();
  });
  $(".sunkistitem33").hover(function(){
    $(".mundiv").show();
  });
  $(".sunkistitem").hover(function(){
    $(".oneononediv").show();
  });
  $(".sunkistitem33").hover(function(){
    $(".oneononediv").hide();
  });
  $(".sunkistitem-gong").hover(function(){
    $(".oneononediv").hide();
  });
  $(".amain5").hover(function(){
    $(".oneononediv").hide();
  });
  $(".sunkistitem,sunkistitem33,.amain5").hover(function(){
    $(".cal-main").hide();

  });
  $(".sunkistitem-gong").hover(function(){
    $(".cal-main").show();
  });
});
$(function(){
  $(".liitem11").hover(function(){
    $(".orangeul").show();
  });
  $(".liitem22").hover(function(){
    $(".orangeul").hide();
  }); 
  $(".liitem33").hover(function(){
    $(".orangeul").hide();
  });
  $(".liitem44").hover(function(){
    $(".orangeul").hide();
  });


  $(".liitem22").hover(function(){
    $(".grapefruitul").show();
  });
  $(".liitem11").hover(function(){
    $(".grapefruitul").hide();
  });
  $(".liitem33").hover(function(){
    $(".grapefruitul").hide();
  });
  $(".liitem44").hover(function(){
    $(".grapefruitul").hide();
  });
  $(".liitem33").hover(function(){
    $(".lemonul").show();
  });
  $(".liitem11").hover(function(){
    $(".lemonul").hide();
  });
  $(".liitem22").hover(function(){
    $(".lemonul").hide();
  });
  $(".liitem44").hover(function(){
    $(".lemonul").hide();
  });
  $(".liitem44").hover(function(){
    $(".limeul").show();
  });
  $(".liitem11").hover(function(){
    $(".limeul").hide();
  });
  $(".liitem22").hover(function(){
    $(".limeul").hide();
  });
  $(".liitem33").hover(function(){
    $(".limeul").hide();
  });
  $(".amain2").hover(function(){
    $(".orangeul").hide();
  });
  $(".amain2").hover(function(){
    $(".grapefruitul").hide();
  });
  $(".amain2").hover(function(){
    $(".lemonul").hide();
  });
  $(".amain2").hover(function(){
    $(".limeul").hide();
  });
  
});
$(function(){
  $(".sunkistitem").hover(function(){
    $(".recipeacategory").show();
  });
  $(".amain3").hover(function(){
    $(".recipeacategory").hide();
  });
  
});
$(function(){
  $(".introulcategory1,.introulcategory2,.introulcategory3,.introulcategory4").hide();
  $(".liitem1").hover(function(){
   $(this).find(".introulcategory1").show();
   
   $(".amain1,.liitem2,.liitem3,.liitem4").hover(function(){
     $(".introulcategory1").hide();
   })
  });
 
});
$(function(){
  
  $(".liitem2").hover(function(){
   $(this).find(".introulcategory2").show();
   
   $(".amain1,.liitem1,.liitem3,.liitem4").hover(function(){
     $(".introulcategory2").hide();
   })
  });
 
});
$(function(){
  $(".liitem4").hover(function(){
    $(this).find(".introulcategory4").show();
    $(".amain1,.liitem1,.liitem3,.liitem2").hover(function(){
      $(".introulcategory4").hide();
    });
  });
});
$(function(){
  $(".liitem3").hover(function(){
    $(this).find(".introulcategory3").show();
    $(".amain1,.liitem1,.liitem2,.liitem4").hover(function(){
      $(".introulcategory3").hide();
    });
  });
});
$(function(){
  $(".directiondiv").hide();
  $(".liitem4").hover(function(){
    $(this).find(".directiondiv").show();
  });
  $(".amain1,.liitem1,.liitem2,.liitem3").hover(function(){
    $(".directiondiv").hide();
  });
});
$(function(){
  $(".liitem11").hover(function(){
    $(".menu-product-contain1").show();
  });
  $(".liitem22,.liitem33,.liitem44,.amain2").hover(function(){
    $(".menu-product-contain1").hide();
  });
  $(".liitem22").hover(function(){
    $(".menu-product-contain2").show();
  });
  $(".liitem11,.liitem33,.liitem44,.amain2").hover(function(){
    $(".menu-product-contain2").hide();
  });
  $(".liitem33").hover(function(){
    $(".menu-product-contain3").show();
  });
  $(".liitem22,.liitem11,.liitem44,.amain2").hover(function(){
    $(".menu-product-contain3").hide();
  });
  $(".liitem44").hover(function(){
    $(".menu-product-contain4").show();
  });
  $(".liitem22,.liitem33,.liitem11,.amain2").hover(function(){
    $(".menu-product-contain4").hide();
  });
});
//메뉴 제이쿼리 끝-------------------------------
//공지사항 시작--------------------
$(function(){ 
  $(".tab_item").hide();
  $(".tab_item").first().show();
  $(".tabs li").click(function(){
    $(".tabs li").removeClass("active22").css({color:"navy",background:"#fff"});
   
    $(this).addClass("active22").css({color:"#fff",background:"navy"});
   
    $(".tab_item").hide(); 
   
    var activeTab = $(this).attr("rel");
   

    $("#" + activeTab).show();
    

  
    
    
  });
});
//공지사항 끝--------------------------
//아이콘 호버 시작-----------------------
$(function(){
  $(".iconhoverwrite-main").hide();
  $(".icon-a-item3").click(function(){
    $(".iconhoverwrite-main:not(:animated)").slideToggle();
    return false;    
  });
  
  
});
//아이콘 호버 끝-----------------------



//플러스바 시작------------------------
$(function(){
  
  $(".plus-main-box").click(function(){
   $(".plus-main-img").toggleClass("plus-main-img2");
    $(".plus-container-mom").fadeToggle();
  });
});
$(function(){
  $(".plus-container1").hover(function(){
    $(".plus-container1:not(:animated)").animate({width:"250px",borderRadius:"30px"});
  },function(){
    $(".plus-container1").animate({width:"60px",borderRadius:"30px"});
  });
  $(".plus-item-img1").animate({width:"30px",left:"16px"});
  $(".plus-p-item1").animate({width:"150px",left:"60px"});  
});
$(function(){
  $(".plus-container2").hover(function(){
    $(".plus-container2:not(:animated)").animate({width:"250px",borderRadius:"30px"});
  },function(){
    $(".plus-container2").animate({width:"60px",borderRadius:"30px"});
  });
  $(".plus-item-img2").animate({width:"30px",left:"16px"});
  $(".plus-p-item2").animate({width:"150px",left:"60px"});  
});
$(function(){
  $(".plus-container3").hover(function(){
    $(".plus-container3:not(:animated)").animate({width:"250px",borderRadius:"30px"});
  },function(){
    $(".plus-container3").animate({width:"60px",borderRadius:"30px"});
  });
  $(".plus-item-img3").animate({width:"30px",left:"16px"});
  $(".plus-p-item3").animate({width:"150px",left:"60px"});  
});
//플러스바 끝------------------------
//유튜브 비디오 시작------------------
$(function(){
  $(".videop22,.videop33,.videop44").hide();
  $(".videop1").click(function(){
    $(".videop11").show();
    $(".videop22,.videop33,.videop44").hide();
  });
  $(".videop2").click(function(){
    $(".videop22").show();
    $(".videop11,.videop33,.videop44").hide();
  });
  $(".videop3").click(function(){
    $(".videop33").show();
    $(".videop11,.videop22,.videop44").hide();
  });
  $(".videop4").click(function(){
    $(".videop44").show();
    $(".videop11,.videop33,.videop22").hide();
  });
  $(".videop1>video").click(function(){
    $(".videop1>video").css({transform:"rotate(10deg)"});
  });
  $(".videop1>video").click(function(){
    $(".videop2>video,.videop3>video,.videop4>video").css({transform:"rotate(0deg)"});
  });
  $(".videop2>video").click(function(){
    $(".videop2>video").css({transform:"rotate(10deg)"});  
  });
  $(".videop2>video").click(function(){
    $(".videop1>video,.videop3>video,.videop4>video").css({transform:"rotate(0deg)"});  
  });
  $(".videop3>video").click(function(){
    $(".videop3>video").css({transform:"rotate(10deg)"});  
  });
  $(".videop3>video").click(function(){
    $(".videop1>video,.videop2>video,.videop4>video").css({transform:"rotate(0deg)"});  
  });
  $(".videop4>video").click(function(){
    $(".videop4>video").css({transform:"rotate(10deg)"});  
  });
  $(".videop4>video").click(function(){
    $(".videop1>video,.videop3>video,.videop2>video").css({transform:"rotate(0deg)"});  
  });
  
});
//유튜브 비디오 끝--------------------


//카테고리 카테고리 적용 시작
$(function(){  
  $(window).scroll(function(){
    var cate1 = $(".categoryback1").offset().top;
  var cate2 = $(".categoryback2").offset().top;
  var cate3 = $(".categoryback3").offset().top;
  var start = -400;
  var scrt = $(window).scrollTop();

  if (scrt >= cate1 + start && scrt < cate2 + start){
    $(".categorybackother").removeClass("on");
    $(".categoryback1").addClass("on");  
  }
  if (scrt >= cate2 + start && scrt < cate3 + start){
    $(".categorybackother").removeClass("on");
    $(".categoryback2").addClass("on");  
  }
  if (scrt >= cate3 + start){
    $(".categorybackother").removeClass("on");
    $(".categoryback3").addClass("on");  
  }
  
});

  
});
//카테고리 카테고리 적용 끝

// 썬키스트 애니메이션 시작
$(function () {
  var animain = $(".ani-main").bxSlider({
    mode: "vertical", //수평방향으로 이동합니다.
    speed: 1, //이동속도(500:0.5초)
    pager: false, //페이징표시제어숨김
    moveSlides: 1, //이동슬라이드수
    slideWidth: 1920, //각슬라이드폭
    minSlides: 1, //최소노출슬라이드수
    maxSlides: 2, //최대노출슬라이드수
    slideMargin: 0, //슬라이드간의 간격
    auto: false, //자동슬라이드여부
    autoHover: false, //마우스오버시자동정지
    controls: false, //이전 다음버튼을 숨긴다
  });
 
  $(".ani-prev").click(function () {
    animain.goToPrevSlide();
    
    return false;
  });
  $(".ani-next").click(function () {
    animain.goToNextSlide();
    
    return false;
  });
});
// 썬키스트 애니메이션 끝