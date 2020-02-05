$(function(){ 
	//페이지 시작 시 맨 위로
	($(function(){
        $('html, body').animate({scrollTop : $("body").offset().top});
    }));
	
	// 창 크기 변경시 사이즈 변경
	var winSize = $(window).width();
	
	setInterval(function() {
		winSize = $(window).width();
		winResize();
	}, 100);
    
	function winResize() {				
		$('.window_h').width($(window).width());
		$('#slides li').css({'padding-top':'0'});
		if(winSize <= 600){
			$('.window_h').height(300); 
			$('#slides').height(300);
			$('#slides li').css({'padding-top':'50px'});
		} else if(winSize <= 800){
			$('.window_h').height(400); 
			$('#slides').height(400);	
		} else if(winSize <= 1000){
			$('.window_h').height(500); 
			$('#slides').height(500);	
			$("#menu").addClass("show");
		} else if(winSize <= 1200){
			$('.window_h').height(600); 
			$('#slides').height(600);
			$("#menu").addClass("show");
		} else{
			$('.window_h').height($(window).height());
			$('#slides').height($(window).height());
			$("#menu").addClass("show");
		}
	}
	
	//슬라이드 쇼 
	var check = 1;
    $("#slide_btn1").click(function() {
    	check = 1;
    	slideImg();
	});
    
    $("#slide_btn2").click(function() {
    	check = 2;
    	slideImg();
	});
    
    $("#slide_btn3").click(function() {
    	check = 3;
    	slideImg();
	});
    
    function slideImg(){
    	$('.on_off i').attr('class','far fa-circle');
    	$('#slide_img img').attr('src', 'img/slide_'+check+'.jpg');
    	$('#slide_btn'+check).attr('class','fas fa-circle');
    	$('#slide_img img').stop(true).css({'opacity': 0.3}).animate({'opacity': 1}, 1500);
    }
	
    setInterval(function() {
    	if(check == 3) check = 0;
    	check++;
    	slideImg();   	  	
	}, 4000);
	
	//메뉴 보이기
    $("header").hover(function(){
    	if(winSize >769){
    		$("#menu").slideToggle(function(){
    			$(this).stop(true).toggleClass("show");
    		});
    	}  	
    });
    
    //모바일인 경우 상단 메뉴버튼 클릭시 보이기	
	$("#btn_menu").click(function(){
		$("#menu").toggleClass("show");
		
		$("#menu li").click(function(){
			$("#menu").addClass("show");
		});
	});
	
	//버튼 클릭 시 스크롤 효과
	$("#logo").click(function(){
        $('html, body').animate({scrollTop : $("body").offset().top}, 500);
    });
	
	$("#menu li").click(function(){
		var href = $(this).find('a').attr('href');
		$('html, body').animate({scrollTop : $(href).offset().top}, 500);
    });
	
	//탭메뉴
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	//탭메뉴 img hover
	$('.tab_img_box a').hover(function() {		
		var tabNum = $(this).parent().parent().attr('id');
		var aNum = $(this).index() + 1;
		$(this).toggleClass(tabNum + '_img' + aNum);
	});
	
	//news a hover
	$(".news").hover(function(){
		$(this).find('img').css({
			'border':'10px solid #eee',
			'-webkit-filter': 'grayscale(100%)',
			'filter': 'gray'
		});
	}, function(){
		$(this).find('img').css({
			'border':'none',
			'-webkit-filter':'grayscale(0%)',
			'filter': 'none'
		});
	});
	
	//go to head
	$("#showMap").click(function(){
		$(".map").toggleClass("show");
		
		if($(".map").hasClass("show") == false) {
			$('html, body').animate({scrollTop : $('.map').offset().top}, 500);
		}	
	});
});