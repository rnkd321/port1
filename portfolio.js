$(function(){
	$("#logoL>a").click(function(e){
		e.preventDefault();
		$("#sideback").addClass("on");
		$("#sidemenu").addClass("on");
		$("#wrap").on("scroll touchmove mousewheel",function(e){
			e.preventDefault();
			e.stopPropagation();
			return false;
		});
	});
	$("#sidetop>a").click(function(e){
		e.preventDefault();
		$("#sideback").removeClass("on");
		$("#sidemenu").removeClass("on");
		$("#wrap").off("scroll touchmove mousewheel");
	});
// --------------------사이드메뉴----------------------------

	$(".sidesec1").eq(0).addClass("on");
	$(".sidebtnL").eq(0).addClass("on");
	$(".sidebtnL").click(function(e){
		e.preventDefault();
		var a=$(this).index();
		$(".sidebtnL").removeClass("on");
		$(this).addClass("on");
		$(".sidesec1").removeClass("on");
		$(".sidesec1").eq(a).addClass("on");
	});
	// -----------------------슬라이더반복--------------------------
	$(".banner1").eq(0).addClass("on");
	var b = -1;
	var b2=setInterval(b1,5000);
	function b1(){
		if( b < 5){
			b++;
			// console.log(b);
		}
		else {
			b = 0;
		}
		if(b==5){
			$("#bannerbtnbox").css({"left":"-255px"});
		}
		else{
			$("#bannerbtnbox").css({"left":"0"});
		}
		$(".bannerbtn1 div").stop().animate({"left":"-255px"},0);
		$(".banner1").removeClass("on");
		$(".bannerbtn1 h2").removeClass("on");
		$(".bannerbtn1 h3").removeClass("on");
		$(".bannerbtn1").removeClass("on");

		$(".bannerbtn1 div").eq(b).stop().animate({"left":"0"},4000,"linear");
		$(".banner1").eq(b).addClass("on");
		$(".bannerbtn1 h2").eq(b).addClass("on");
		$(".bannerbtn1 h3").eq(b).addClass("on");
		$(".bannerbtn1").eq(b).addClass("on");
		if(b==3){
			$("#banner4").stop().animate({"left":"150px","opacity":1},700,"easeInElastic");
		}
		else{
			$("#banner4").stop().animate({"left":"-300px","opacity":0},0);
		}
	}
// ----------------------------영상버튼-------------
	var video1=document.getElementById("video1");
	$("#banner2_play").click(function(e){
		e.preventDefault();
		video1.play();
		$("#banner2_play").addClass("on");
		$("#banner2_pause").addClass("on");
	});
	$("#banner2_pause").click(function(e){
		e.preventDefault();
		video1.pause();
		$("#banner2_play").removeClass("on");
		$("#banner2_pause").removeClass("on");
	});
// ------------------------------슬라이더호버-------------------
$("#header_banner").hover(function(){
	clearInterval(b2);
	$(".bannerbtn1 div").stop().animate({"left":"-255px"},0);
},function(){
	if($("#banner2_play").hasClass("on")==true){
		clearInterval(b2);
		$(".bannerbtn1 div").stop().animate({"left":"-255px"},0);
	}
	else{
		b2=setInterval(b1,5000);
		$(".bannerbtn1 div").eq(b).stop().animate({"left":"0"},4000);
	}
});

$(".bannerbtn1").hover(function(){
	c=$(this).index();

	$(".bannerbtn1 h2").eq(c).addClass("on");
	$(".bannerbtn1 h3").eq(c).addClass("on");
},function(){
	if(c==b){
		$(".bannerbtn1 h2").eq(c).addClass("on");
		$(".bannerbtn1 h3").eq(c).addClass("on");
	}
	else{
		$(".bannerbtn1 h2").eq(c).removeClass("on");
		$(".bannerbtn1 h3").eq(c).removeClass("on");
	}
});

$("#header_banner").hover(function(){
			if(b<5){
				$("#left").removeClass("on");
				$("#right").addClass("on");
			}
			else{
				$("#left").addClass("on");
				$("#right").removeClass("on");
			}
		},function(){
			$("#left").removeClass("on");
			$("#right").removeClass("on");
		});
// --------------------------------슬라이더클릭-----------------
$(".bannerbtn1").click(function(){
	b=$(this).index();

	video1.pause();
	$("#banner2_play").removeClass("on");
	$("#banner2_pause").removeClass("on");

	$(".banner1").removeClass("on");
	$(".bannerbtn1 h2").removeClass("on");
	$(".bannerbtn1 h3").removeClass("on");
	$(".bannerbtn1").removeClass("on");

	$(".banner1").eq(b).addClass("on");
	$(".bannerbtn1 h2").eq(b).addClass("on");
	$(".bannerbtn1 h3").eq(b).addClass("on");
	$(".bannerbtn1").eq(b).addClass("on");
});

$("#left").click(function(e){
	e.preventDefault();
	$("#bannerbtnbox").stop().animate({"left":"0"},300);
	$("#left").removeClass("on");
	$("#right").addClass("on");
});
$("#right").click(function(e){
	e.preventDefault();
	$("#bannerbtnbox").stop().animate({"left":"-255px"},300);
	$("#right").removeClass("on");
	$("#left").addClass("on");
});

$(".bannerbtn1").eq(3).click(function(){
	$("#banner4").stop().animate({"left":"-300px","opacity":0},0);
	$("#banner4").stop().animate({"left":"150px","opacity":1},700,"easeInElastic");
});
// ---------------------------------------sec1시작--------------

$(".sec1_contbox").hover(function(){
	var d=$(this).index();
	$(".sec1_imgbox img").eq(d).addClass("on");
},function(){
	$(".sec1_imgbox img").removeClass("on");
});

// ------------------------------sec2콘텐츠 시작--------------
// --------------------------------호버-------------------
$("#sec2_contbox1 .sec2_cont").hover(function(){
	var e1=$(this).index();
	$("#sec2_contbox1 .sec2_conttop img").eq(e1).addClass("on");
},function(){
	$("#sec2_contbox1 .sec2_conttop img").removeClass("on");
});

$("#sec2_contbox2 .sec2_cont").hover(function(){
	var e2=$(this).index();
	$("#sec2_contbox2 .sec2_conttop img").eq(e2).addClass("on");
},function(){
	$("#sec2_contbox2 .sec2_conttop img").removeClass("on");
});

$("#sec2_contbox3 .sec2_cont").hover(function(){
	var e3=$(this).index();
	$("#sec2_contbox3 .sec2_conttop img").eq(e3).addClass("on");
},function(){
	$("#sec2_contbox3 .sec2_conttop img").removeClass("on");
});

$("#sec2_contbox4 .sec2_cont").hover(function(){
	var e4=$(this).index();
	$("#sec2_contbox4 .sec2_conttop img").eq(e4).addClass("on");
},function(){
	$("#sec2_contbox4 .sec2_conttop img").removeClass("on");
});

$("#sec2_contbox5 .sec2_cont").hover(function(){
	var e5=$(this).index();
	$("#sec2_contbox5 .sec2_conttop img").eq(e5).addClass("on");
},function(){
	$("#sec2_contbox5 .sec2_conttop img").removeClass("on");
});

$("#sec2_contbox6 .sec2_cont").hover(function(){
	var e6=$(this).index();
	$("#sec2_contbox6 .sec2_conttop img").eq(e6).addClass("on");
},function(){
	$("#sec2_contbox6 .sec2_conttop img").removeClass("on");
});

// --------------------------------클릭----------------------
$("#sec2_btn1").addClass("on");
$("#sec2_btn1 a").addClass("on");
$(".sec2_contbox").eq(0).addClass("on");
$("#sec2_tagbox a").eq(0).addClass("on");
$(".sec2_box").eq(0).addClass("on");

$("#sec2_btn1").click(function(e){
	e.preventDefault();

	if($("#sec2_btn1").hasClass("on")==true){
		return false;
	}
	else{
		$("#sec2_titletag a").css({"display":"inline-block"});
		$("#sec2_tagbox a").removeClass("on");
		$("#sec2_tagbox a").eq(0).addClass("on");
		$("#sec2_btn2").removeClass("on");
		$("#sec2_btn2 a").removeClass("on");
		$("#sec2_btn1").addClass("on");
		$("#sec2_btn1 a").addClass("on");
		$(".sec2_box").removeClass("on");
		$(".sec2_box").eq(0).addClass("on");
		$(".sec2_small").removeClass("on");
		$(".sec2_contbox").removeClass("on");
		$(".sec2_contbox").eq(0).addClass("on");
	}
});
$("#sec2_btn2").click(function(e){
	e.preventDefault();

	if($("#sec2_btn2").hasClass("on")==true){
		return false;
	}
	else{
		$("#sec2_titletag a").css({"display":"none"});
		$("#sec2_tagbox a").removeClass("on");
		$("#sec2_tagbox a").eq(0).addClass("on");
		$("#sec2_btn2").addClass("on");
		$("#sec2_btn2 a").addClass("on");
		$("#sec2_btn1").removeClass("on");
		$("#sec2_btn1 a").removeClass("on");
		$(".sec2_box").removeClass("on");
		$(".sec2_box").eq(1).addClass("on");
		$(".sec2_contbox").removeClass("on");
		$(".sec2_small").removeClass("on");
		$(".sec2_small").eq(0).addClass("on");
	}
});

$("#sec2_tagbox a").click(function(e){
	e.preventDefault();
	var f=$(this).index();
	if($("#sec2_btn1").hasClass("on")==true){
		$("#sec2_tagbox a").removeClass("on");
		$(this).addClass("on");
		$(".sec2_contbox").removeClass("on");
		$(".sec2_contbox").eq(f).addClass("on");
	}
	else{
		$("#sec2_tagbox a").removeClass("on");
		$(this).addClass("on");
		$(".sec2_small").removeClass("on");
		$(".sec2_small").eq(f).addClass("on");
	}
});

// ---------------------aside작은메뉴 끼리 전환-----------------

$("#aside_minivideo1").addClass("on");
$("#aside_minivideo1 .minibtn1").click(function(e){
	e.preventDefault();
	$("#aside_minivideo1").removeClass("on");
	$("#aside_minivideo2").addClass("on");
});

$("#aside_minivideo2 .minibtn1").click(function(e){
	e.preventDefault();
	$("#aside_minivideo2").removeClass("on");
	$("#aside_minivideo1").addClass("on");
});

// ----------------------미니사이드메뉴 눌러서 큰메뉴켜기-------------
$("#aside_minivideo1 .minivideotop").click(function(e){
	e.preventDefault();
	$("#aside_bigwindow").addClass("on");
	$("#aside_bigvideo1").addClass("on");
	$("#wrap").on("scroll touchmove mousewheel",function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
});
$("#aside_minivideo2 .minivideotop").click(function(e){
	e.preventDefault();
	$("#aside_bigwindow").addClass("on");
	$("#aside_bigvideo2").addClass("on");
	$("#wrap").on("scroll touchmove mousewheel",function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
});

// -----------------------aside큰메뉴-------------------------

$("#aside_bigvideo1 .bigvideo_exit a").click(function(e){
	e.preventDefault();
	$("#aside_bigvideo1").removeClass("on");
	$("#aside_bigwindow").removeClass("on");
	$("#wrap").off("scroll touchmove mousewheel");
});
$("#aside_bigvideo2 .bigvideo_exit a").click(function(e){
	e.preventDefault();
	$("#aside_bigvideo2").removeClass("on");
	$("#aside_bigwindow").removeClass("on");
	$("#wrap").off("scroll touchmove mousewheel");
});

// -------------------------큰메뉴 끼리 전환--------------------

$("#aside_bigvideo1 button").click(function(){
	$("#aside_bigvideo1").removeClass("on");
	$("#aside_bigvideo2").addClass("on");
	$("#wrap").on("scroll touchmove mousewheel",function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	video2.pause();
	$("#aside_bigvideo1 .aside_play").removeClass("on");
	$("#aside_bigvideo1 video").removeClass("on");
});
$("#aside_bigvideo2 button").click(function(){
	$("#aside_bigvideo2").removeClass("on");
	$("#aside_bigvideo1").addClass("on");
	$("#wrap").on("scroll touchmove mousewheel",function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	video3.pause();
	$("#aside_bigvideo2 .aside_play").removeClass("on");
	$("#aside_bigvideo2 video").removeClass("on");
});

// -----------------------큰 영상플레이버튼-----------------
var video2=document.getElementById("video2");
var video3=document.getElementById("video3");

$("#aside_bigvideo1 .aside_play").click(function(e){
	e.preventDefault();
	video2.play();
	$("#aside_bigvideo1 .aside_play").addClass("on");
	$("#aside_bigvideo1 video").addClass("on");
});
$("#aside_bigvideo1 video").click(function(e){
	e.preventDefault();
	video2.pause();
	$("#aside_bigvideo1 .aside_play").removeClass("on");
	$("#aside_bigvideo1 video").removeClass("on");
});

$("#aside_bigvideo2 .aside_play").click(function(e){
	e.preventDefault();
	video3.play();
	$("#aside_bigvideo2 .aside_play").addClass("on");
	$("#aside_bigvideo2 .video").addClass("on");
});
$("#aside_bigvideo2 video").click(function(e){
	e.preventDefault();
	video3.pause();
	$("#aside_bigvideo2 .aside_play").removeClass("on");
	$("#aside_bigvideo2 video").removeClass("on");
});

// --------------------------스크롤시 aside변화주기----------------

$(window).scroll(function(){
	var g=$(this).scrollTop();
	// console.log(g);

	if(g>0){
		if($("#aside_minivideo1").hasClass("on")==true){
			$("#aside_minivideo1").removeClass("on");
			$(".smallaside_p1").removeClass("on");

			$("#smallaside_p").addClass("on");
			$(".smallaside_p1").eq(0).addClass("on");
		}
		else if($("#aside_minivideo2").hasClass("on")==true){
			$("#aside_minivideo2").removeClass("on");
			$(".smallaside_p1").removeClass("on");

			$("#smallaside_p").addClass("on");
			$(".smallaside_p1").eq(1).addClass("on");
		}
	}
	else{
		if($(".smallaside_p1").eq(0).hasClass("on")==true){
			$("#smallaside_p").removeClass("on");
			$(".smallaside_p1").removeClass("on");

			$("#aside_minivideo1").addClass("on");
		}
		else{
			$("#smallaside_p").removeClass("on");
			$(".smallaside_p1").removeClass("on");

			$("#aside_minivideo2").addClass("on");
		}
	}
});

// ---------------------------호버시 작은aside커지기-------------

$("#smallaside").hover(function(){

	if($(".smallaside_p1").eq(0).hasClass("on")){
		$(".smallaside_p1").removeClass("on");

		$(".smallaside_mini").eq(0).addClass("on");
	}
	else if($(".smallaside_p1").eq(1).hasClass("on")){
		$(".smallaside_p1").removeClass("on");

		$(".smallaside_mini").eq(1).addClass("on");
	}
},function(){
	if($(".smallaside_mini").eq(0).hasClass("on")==true){
		$(".smallaside_mini").removeClass("on");

		$(".smallaside_p1").eq(0).addClass("on");
	}
	else if($(".smallaside_mini").eq(1).hasClass("on")==true){
		$(".smallaside_mini").removeClass("on");

		$(".smallaside_p1").eq(1).addClass("on");
	}
});

// -------------------작은aside끼리 전환------------------------
$("#smallaside_mini1 .minibtn1").click(function(e){
	e.preventDefault();

	$("#smallaside_mini1").removeClass("on");
	$("#smallaside_mini2").addClass("on");
});
$("#smallaside_mini2 .minibtn1").click(function(e){
	e.preventDefault();

	$("#smallaside_mini2").removeClass("on");
	$("#smallaside_mini1").addClass("on");
});

// ----------------------작은 aside로 영상켜기---------------------

$("#smallaside_mini1 .minivideotop").click(function(e){
	e.preventDefault();
	$("#aside_bigwindow").addClass("on");
	$("#aside_bigvideo1").addClass("on");
	$("#wrap").on("scroll touchmove mousewheel",function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
});
$("#smallaside_mini2 .minivideotop").click(function(e){
	e.preventDefault();
	$("#aside_bigwindow").addClass("on");
	$("#aside_bigvideo2").addClass("on");
	$("#wrap").on("scroll touchmove mousewheel",function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
});

// ---------------------------풋터 셀렉트----------------------

$("#footer_select>a").click(function(e){
	e.preventDefault();

	if($("#footer_option").hasClass("on")==false){
		$("#footer_option").addClass("on");
	}
	else{
		$("#footer_option").removeClass("on");
	}
});

// ------------------------풋터가 올라갈때 aside고정-------------

$(window).scroll(function(){
	var g=$(this).scrollTop();
	var g1=$("footer").offset().top-1000;
	// console.log(g);
	// console.log(g1);

	if(g>=g1){
		$("#smallaside").addClass("on");
	}
	else{
		$("#smallaside").removeClass("on");
	}

});

});