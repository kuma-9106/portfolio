


window.onload = function(){
'use strict';
	  
	  $('a[href^="#"]').on('click',function(){
			let href = $(this).attr('href');
			let target = $(href == '#' || href == '' ? 'html':href);
			let position = target.offset().top;
			$('body,html').animate({scrollTop:position},500,'swing');
			return false;
    });
    
    $('#top').hide();
    $(window).on('scroll', function(){
      if($(this).scrollTop() > 300){
        $('#top').fadeIn();
      }else{
        $('#top').fadeOut();
      }
    });

    const aboutarea = $('#about').offset().top;
    $('.prof_txt').css({
     opacity : 0,
     transform : 'translateY(50px)',
     transition :  '800ms'
    });
		$(window).on('scroll load', function(){
     let scroll_top = $(this).scrollTop();
     if(scroll_top > aboutarea){
      $('.prof_txt').css({
        opacity : 1,
        transform : 'translateY(0)'
      }); 
     }
    });


    function getCurrentState() {
      let windowTop = 0;
      let windowBottom = $(window).innerHeight();

      let area = $("#skills");
      let areaTop = area.offset().top - $(window).scrollTop();
      let areaBottom = areaTop + area.height();

      if (areaBottom < windowTop || windowBottom < areaTop) {
          return "out";
      } else if (windowTop <= areaTop && areaBottom <= windowBottom) {
          return "in";
      }

      return "intersect";
  }
              
     let prevStatus = "out";      
     let isDoing = false;
     const charts = document.querySelectorAll('#chart li');

     function animationStart() {
                if (isDoing) {
                    return;
                }
        const frameCount = 22;
        let offSetFrame = -100;
        let frame = 0;

		 function backgroundSet(){
        charts.forEach(chart =>{
        let percent = parseInt(chart.dataset.percent,10);
        let targetPercent = 5 * frame;
     if(percent >= targetPercent){
     　　chart.style.backgroundPositionY = `${offSetFrame * frame}px`;
    　}
    　});
    }
    let intervalId = setInterval(function(){
       backgroundSet();
       frame++;
       if(frame >= 22){
        clearInterval(intervalId);   
       }
    },20);	
                isDoing = true;
            }

     function animationReset() {
	    　charts.forEach(chart => {
	      chart.style.backgroundPositionY = '0px';
	     });
        
			        /*console.log(charts.length);*/
              isDoing = false;
            }
              
      $(function() {
                $(document).on("scroll", function() {
                    let status = getCurrentState();
                    console.log(status);

                    if (prevStatus != "in" && status == "in") {
                        if (!isDoing) {
                            animationStart();
                        }
                    }

                    if (prevStatus != "out" && status == "out") {
                        animationReset();
                    }

                    prevStatus = status;
                });
        });

	  // $(window).on('scroll',function(){
		// let skill = $('#skills').offset().top;	
		// let skillArea = skill + $('#skills').innerHeight();
		// let nowScroll = $(window).scrollTop();
    // let wh = $(window).innerHeight();
    // console.log(wh);
		// if(nowScroll >= skill - wh/2 && nowScroll <= skillArea - wh/2 && isDoing === false){
		// isDoing = true;
		// const charts = document.querySelectorAll('#chart li');
    //     const frameCount = 22;
    //     let offSetFrame = -100;
    //     let frame = 0;

		// function backgroundSet(){
    //     charts.forEach(chart =>{
			 
    //     let percent = parseInt(chart.dataset.percent,10);
    //     let targetPercent = 5 * frame;
    //  if(percent >= targetPercent){
    //  　　chart.style.backgroundPositionY = `${offSetFrame * frame}px`;
    // 　}
    // 　});
    // }
    // let intervalId = setInterval(function(){
    //    backgroundSet();
    //    frame++;
    //    if(frame >= 22){
    //     clearInterval(intervalId);   
    //    }
    // },20);	
		// }else if(nowScroll <= (skill-wh) || nowScroll >= skillArea){
		// 	chart.style.backgroundPositionY = '0';
		// 	isDoing = false;
		//    }
		// else{
		// 	return;
		// }
		// });
    
			
		

    
    
    
	 


	
	
};
