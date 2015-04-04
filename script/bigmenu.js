

id = setInterval(function() {
	var y = scrollY;
	var e = document.getElementsByTagName('nav')[0];
	// console.log(y)
	if (y > 100) {
			e.setAttribute("class", "bigMenu");
		} else if (y < 100) {
			e.setAttribute("class", "");
		};
},100)


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
