function fn_article3(containerID, buttonID, autoStart){
  //fn_article3전체포괄 수행명
  

var $element = $('#'+containerID).find('.rollingul');

var $prev = $('#'+buttonID).find('.rollingprev');

var $next = $('#'+buttonID).find('.rollingnext');

var $play = $('#'+containerID).find('.control > a.play');

var $stop = $('#'+containerID).find('.control > a.stop');

var autoPlay = autoStart;

var auto = null;

var speed = 3000;

var timer = null;

//css와 동일시 확인

var move = $element.children().outerHeight();

var first = false;

var lastChild;

 

lastChild = $element.children().eq(-1).clone(true);

lastChild.prependTo($element);

$element.children().eq(-1).remove();

 

if($element.children().length==1){

$element.css('top','0px');

}else{

$element.css('top','-'+move+'px');

}

 

if(autoPlay){

timer = setInterval(moveNextSlide, speed);

$play.addClass('on').text('▶');//처음 play하면 먹플레이 상태

auto = true;

}else{

$play.hide();

$stop.hide();

}

 

$element.find('>li').bind({

'mouseenter': function(){

if(auto){

clearInterval(timer);

}
},

'mouseleave': function(){

if(auto){

timer = setInterval(moveNextSlide, speed);

}

}

});

 

$play.bind({

'click': function(e){

if(auto) return false;

 

e.preventDefault();

timer = setInterval(moveNextSlide, speed);

$(this).addClass('on').text('▶');//play하면 먹플레이상태

$stop.removeClass('on').text('▣');//play하면 공스탑상태

auto = true;

}

});

 

$stop.bind({

'click': function(e){

if(!auto) return false;

 

e.preventDefault();

clearInterval(timer);

$(this).addClass('on').text('■');//stop하면 먹스탑

$play.removeClass('on').text('▷');//stop하면 공플레이

auto = false;

}

});

 

$prev.bind({

'click': function(){

movePrevSlide();

return false;  

},

'mouseenter': function(){

if(auto){

clearInterval(timer);

}

},

'mouseleave': function(){

if(auto){

timer = setInterval(moveNextSlide, speed);

}

}

});

 

$next.bind({

'click': function(){

moveNextSlide();

return false;

},

'mouseenter': function(){

if(auto){

clearInterval(timer);

}

},

'mouseleave': function(){

if(auto){

timer = setInterval(moveNextSlide, speed);

}

}

});

 

function movePrevSlide(){

$element.each(function(idx){

if(!first){

$element.eq(idx).animate({'top': '0px'},'normal',function(){

lastChild = $(this).children().eq(-1).clone(true);

lastChild.prependTo($element.eq(idx));

$(this).children().eq(-1).remove();

$(this).css('top','-'+move+'px');

});

first = true;

return false;

}

 

$element.eq(idx).animate({'top': '0px'},'normal',function(){

lastChild = $(this).children().filter(':last-child').clone(true);

lastChild.prependTo($element.eq(idx));

$(this).children().filter(':last-child').remove();

$(this).css('top','-'+move+'px');

});

});

}

 

function moveNextSlide(){

$element.each(function(idx){
  //$.each()메서드는 object와 배열 모두에서 사용할 수 있는 일반적인 반복 함수입니다.

  //다시 말해, 배열과 length 속성을 갖는 배열과 유사 배열 객체들을 index를 기준으로 반복할 수 있습니다.

  //첫 번째 매개변수로 배열이나 객체를 받습니다.

  //그리고 두번째 매개변수로 콜백함수를 받으며 콜백함수의 인자로는 인덱스와 값을 인자로 갖습니다.

 

var firstChild = $element.children().filter(':first-child').clone(true);
//처음 자식을 복제해라

firstChild.appendTo($element.eq(idx));

$element.children().filter(':first-child').remove();

$element.css('top','0px');

 

$element.eq(idx).animate({'top':'-'+move+'px'},'normal');

 //상단으로 역순으로 첫번째 대치하면서 올라감

});

}

}
