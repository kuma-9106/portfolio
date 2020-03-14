


window.onload = function(){
'use strict';
	  
	  $('a[href^="#"]').on('click',function(){
			let href = $(this).attr('href');
			let target = $(href == '#' || href == '' ? 'html':href);
			let position = target.offset().top;
			$('body,html').animate({scrollTop:position},500,'swing');
			return false;
		});
		
	  
	  
	  　let isDoing = false;

	  $(window).on('scroll',function(){
		let skill = $('#skills').offset().top;	
		let skillArea = skill + $('#skills').innerHeight();
		let nowScroll = $(window).scrollTop();
		let wh = $(window).height();
	  if(nowScroll > skill - wh/2 && isDoing === false){
		isDoing = true;
		const charts = document.querySelectorAll('#chart li');
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
		}else if(nowScroll <= skill || nowScroll >= skillArea){
			console.log('skillエリア外');
		   }
		else{
			return;
		}
		});
    
			
		

    
    
    
	 


	
	
};
