$(function () {
  $(".iconimg1").click(function () {
    $("#searchinput:not(:animated)").toggleClass("searchicon");
  });
});
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
  $(".liitem").mouseover(function(){
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
  $(".sunkistitem").hover(function(){
    $(".mundiv").hide();
  });
  $(".amain5").hover(function(){
    $(".mundiv").show();
  });
  $(".sunkistitem33").hover(function(){
    $(".mundiv").show();
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
