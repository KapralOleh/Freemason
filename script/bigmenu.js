var nav = document.getElementsByTagName('nav')[0];
	  window.onscroll = function() {
        // console.log(scrollY);
        if (scrollY > 100) {
			nav.setAttribute("class", "bigMenu");
		} else if (scrollY < 100) {
			nav.setAttribute("class", " ");
		};
	
      };
    
	
// $(function (){
// 	$(window).scroll(function(e){
// 		x = window.scrollY;
// 		console.log(x);
// 		if (x >= 200) {
// 			$('nav').addClass("bigMenu");
// 		} else  {
// 			$('nav').removeClass("bigMenu");
// 		}
// 	})
// })
