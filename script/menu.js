

	function over() {
	  var height = 0;
	    function frame() {
	  	var elem = document.getElementById('slideMenu');
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
	  	var elem = document.getElementById('slideMenu');
	  		height -=10;  
	  	    elem.style.height = height + 'px';
	  	    
	   	if (height == 0)  
	      clearInterval(id);
	  }
	  var id = setInterval(frame, 20) ;
	};
	


document.getElementById('openMenu').addEventListener("mouseover",function(){ if(document.getElementById('slideMenu').style.height === "160px"){
	return false;
} else {over()} })
document.getElementById('overMenu').addEventListener("mouseleave",function(){ out() })


