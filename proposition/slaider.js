var imgArray = [
		"img/gallery/1.jpg",
		"img/gallery/2.jpg",	
		"img/gallery/3.jpg",	
		"img/gallery/4.jpg",
		"img/gallery/5.jpg",
		"img/gallery/6.jpg",	
		"img/gallery/7.jpg",	
		"img/gallery/8.jpg"
	],
	currentImg = 0,
	slide = document.getElementById('slide'),
	but1 = document.getElementById('prev'),
	but2 = document.getElementById('next');
	slide.setAttribute("src",imgArray[currentImg]);
	but1.style.display = "none";

	function next() {
		if (currentImg != imgArray.length - 1) {
			currentImg++;
			var opacity = 0;
	    	function frame() {	  	
	  			opacity +=2;  
	  	    	slide.style.opacity = opacity/100;
	   			if (opacity == 100)  {
	      		clearInterval(id);	  		
	  			}
	  		}
	  		var id = setInterval(frame, 20) ;	
	  		but1.style.display = "inline-block";	
			slide.setAttribute("src",imgArray[currentImg]);		
		} else {
			but2.style.display = "none";

		}
			

	};
	function back() {
		 if (currentImg != 0){
			currentImg--;
			var opacity = 0;
	    	function frame() {	  	
	  			opacity +=2;  
	  	    	slide.style.opacity = opacity/100;
	   			if (opacity == 100)  {
	      		clearInterval(id);	  		
	  			}
	  		}
	  		var id = setInterval(frame, 20) ;
	  		but2.style.display = "inline-block";
			slide.setAttribute("src",imgArray[currentImg]);
		} 
	};

	but1.addEventListener("click", back);
 	but2.addEventListener("click", next);