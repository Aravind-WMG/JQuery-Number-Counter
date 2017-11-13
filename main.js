var lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var loop;
jQuery(window).on("scroll",function(){
	var scrollVal = jQuery(window).scrollTop();
	if(scrollVal > 10){
		counterCalled();
    counterCalled1();
    letterShuffle();
     jQuery(window).off('scroll');
	}
});

jQuery(window).on("load",function(){
  /*counterCalled();
    counterCalled1();
    letterShuffle();*/
});

function counterCalled(){
$('span.count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 3000,
    easing: 'swing',
    step: function () {
      $this.text(this.Counter.toFixed(1));
    }
  });
});

}

function counterCalled1(){
$('span.count1').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 3000,
    easing: 'swing',
    step: function () {
      $this.text(this.Counter.toFixed(0));
    }
  });
});

}

function letterShuffle(){
	  var time = 0;
	$(".title").find("span").each(function() {
    var obj = $(this);
    setTimeout(function() {
      shuffleText(obj, obj.text(), 5, 1500);
    }, time);
    time = time + 100;
  });
}

function shuffleText(obj, letter, shuffles, frames) {
  var i = 0, loop = setInterval(function() {
    console.log(i, shuffles);
    if (i++ < shuffles) {
      var random = Math.floor(Math.random() * (lettersArray.length + 1));
      obj.text(lettersArray[random]);
    } else {
      myClear(loop);
      for (var e = 0; e < lettersArray.length; e++) {
        if (letter == lettersArray[e]) {
          obj.text(lettersArray[e]);
          return false;
        }
      }
    }
  }, (frames/shuffles));
}

function myClear(loop) {
  window.clearInterval(loop);
}
