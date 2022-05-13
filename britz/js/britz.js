//대슬라이드 시작 -------------------
$(function () {
    $(window).on("load", function () {
      $(".slider").slider({ height: "1080px" });
    });
  });
  //대슬라이드 끝 -------------------

// 메뉴 제이쿼리 시작
$(function(){
    $(".menu-a-img1").hide();
    $(".write-li1,.main-li").hover(function(){
        $(".menu-a-img1").show();
    });
    $(".write-li2,.write-li3,.write-li4,.write-li5,.write-li6").hover(function(){
        $(".menu-a-img1").hide();
    });
    $(".menu-a-img2").hide();
    $(".write-li2").hover(function(){
        $(".menu-a-img2").show();
    });
    $(".write-li1,.write-li3,.write-li4,.write-li5,.write-li6,.main-li").hover(function(){
        $(".menu-a-img2").hide();
    });
    $(".menu-a-img3").hide();
    $(".write-li3").hover(function(){
        $(".menu-a-img3").show();
    });
    $(".write-li1,.write-li2,.write-li4,.write-li5,.write-li6,.main-li").hover(function(){
        $(".menu-a-img3").hide();
    });
    $(".menu-a-img4").hide();
    $(".write-li4").hover(function(){
        $(".menu-a-img4").show();
    });
    $(".write-li1,.write-li2,.write-li5,.write-li3,.write-li6,.main-li").hover(function(){
        $(".menu-a-img4").hide();
    });
    $(".menu-a-img5").hide();
    $(".write-li5").hover(function(){
        $(".menu-a-img5").show();
    });
    $(".write-li1,.write-li2,.write-li4,.write-li3,.write-li6,.main-li").hover(function(){
        $(".menu-a-img5").hide();
    });
    $(".menu-a-img6").hide();
    $(".write-li6").hover(function(){
        $(".menu-a-img6").show();
    });
    $(".write-li1,.write-li2,.write-li4,.write-li3,.write-li5,.main-li").hover(function(){
        $(".menu-a-img6").hide();
    });
    $(".menu-a1-img1").hide();
    $(".write-li1,.main-li").hover(function(){
        $(".menu-a1-img1").show();
    });
    $(".write-li4,.write-li2,.write-li3,.write-li5").hover(function(){
        $(".menu-a1-img1").hide();
    });
    $(".menu-a1-img2").hide();
    $(".write-li2").hover(function(){
        $(".menu-a1-img2").show();
    });
    $(".write-li4,.write-li1,.write-li3,.write-li5,.main-li").hover(function(){
        $(".menu-a1-img2").hide();
    });
    $(".menu-a1-img3").hide();
    $(".write-li3").hover(function(){
        $(".menu-a1-img3").show();
    });
    $(".write-li1,.write-li2,.write-li4,.write-li5,.main-li").hover(function(){
        $(".menu-a1-img3").hide();
    });
    $(".menu-a1-img4").hide();
    $(".write-li4").hover(function(){
        $(".menu-a1-img4").show();
    });
    $(".write-li1,.write-li2,.write-li3,.write-li5,.main-li").hover(function(){
        $(".menu-a1-img4").hide();
    });
   
    $(".write-li1-3,.main-li").hover(function(){
        $(".menu-a3-img1").show();
    });
    $(".write-li2-3,.write-li2,.write-li3-3,.write-li5").hover(function(){
        $(".menu-a3-img1").hide();
    });
    $(".menu-a3-img2").hide();
    $(".write-li2-3").hover(function(){
        $(".menu-a3-img2").show();
    });
    $(".write-li1-3,.write-li2,.write-li3-3,.write-li5,.main-li").hover(function(){
        $(".menu-a3-img2").hide();
    });
    $(".menu-a3-img3").hide();
    $(".write-li3-3").hover(function(){
        $(".menu-a3-img3").show();
    });
    $(".write-li1-3,.write-li2,.write-li2-3,.write-li5,.main-li").hover(function(){
        $(".menu-a3-img3").hide();
    });
    $(".search-main").hide();
    $(".search-close").click(function(){
      $(".search-main").fadeOut();
    });
    $(".search-img").click(function(){
      $(".search-main").fadeIn();
    });       
});
// 메뉴 제이쿼리 끝


// 회사소개 시작
$(function(){
$(window).scroll(function(){
    var intro = $(".introducemain").offset().top;
    var start = -100;
    var scrt = $(window).scrollTop();
    if (scrt >= intro + start){
        $(".introducemainother").removeClass("on");
        $(".introducemain").addClass("on");  
      }
})
});
// 회사소개 끝

//브리츠 오퍼서티 효과 시작
$(function(){
    $(window).scroll(function(){
        var photo = $(".photo-main").offset().top;
        var start= -200;
        var scrt = $(window).scrollTop();
        if(scrt >= photo + start){
            $(".photo-main2").removeClass("on");
            $(".photo-main").addClass("on");
        }
    });
});
//브리츠 오퍼서티 효과 끝

//sns 옆에서 나오는 효과 시작
$(function(){
    $(window).scroll(function(){
        var snsmain = $(".snsmain").offset().top;
        var start= -200;
        var scrt = $(window).scrollTop();
        if(scrt >= snsmain + start){
            $(".snsmainother").removeClass("on");
            $(".snsmain").addClass("on");
        }
    });
});
//sns 옆에서 나오는 효과 끝

//카테고리 옆 위 뒤에서 나오는 효과 시작
$(function(){
    $(window).scroll(function(){
        var category1 = $(".category-one").offset().top;
        var category2 = $(".category-two").offset().top;
        var category3 = $(".category-three").offset().top;
        var start= -550;
        var scrt = $(window).scrollTop();

        if(scrt >= category1 + start && scrt < category2 + start){
            $(".category-other").removeClass("on");
            $(".category-one").addClass("on");
        }
        if(scrt >= category2 + start && scrt < category3 + start){
            $(".category-other").removeClass("on");
            $(".category-two").addClass("on");
        }
        if(scrt >= category3 + start ){
            $(".category-other").removeClass("on");
            $(".category-three").addClass("on");
        }
    });
});
//카테고리 옆 위 뒤에서 나오는 효과 끝