


window.onload = function(){
'use strict';
	  
	  $('a[href^="#"]').on('click',function(){
			let href = $(this).attr('href');
			let target = $(href == '#' || href == '' ? 'html':href);
			let position = target.offset().top;
			$('body,html').animate({scrollTop:position},500,'swing');
			return false;
		});
		
	    function getCurrentState() {
                let windowTop = 0;　　　　　　　　　　　　　　　　//window一番上
                let visibleArea = $(window).innerHeight(); //表示されている領域の高さ

                let skill = $("#skills");　//skillのエリア
                let skillTop = skill.offset().top - $(window).scrollTop(); //doc上からskillまでの高さースクロールした領域
								　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//スクロールしたｘ時点から#skillまでの残りの距離
                let skillBottom = skillTop + skill.height(); //skillエリア終点からの距離

                if (skillBottom < windowTop || visibleArea < skillTop) {
                    return "out";　//out判定を返す
                } else if (windowTop <= skillTop && skillBottom <= visibleArea) {
                    return "in";　//in判定を返す
                }

                return "intersect";　//intersect判定を返す
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
              charts.style.backgroundPositionY = '0px';
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
