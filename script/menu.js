var on = document.getElementById('openMenu'),
	off = document.getElementById('overMenu'),
	elem = document.getElementById('slideMenu');
	
	function over() {
	  var height = 0;
	    function frame() {	  	
	  		height +=10;  
	  	    elem.style.height = height + 'px';
	   	if (height == 160)  {
	      	clearInterval(id);	  		
	  	}
	  }
	  var id = setInterval(frame, 20) ;
	};

	function out() {
	  var height = 160;
	    function frame() {	  	
	  		height -=10;  
	  	    elem.style.height = height + 'px';	  	    
	   	if (height == 0)  
	      clearInterval(id);
	  }
	  var id = setInterval(frame, 20) ;
	};
	


on.addEventListener("mouseover",function(){ if(elem.style.height === "160px"){
	return false;
} else {over()} })
off.addEventListener("mouseleave",function(){ out() })


