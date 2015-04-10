var modal = $('#modalDiv');
var oldDiv = null;
   
  function close (cb) {
    if(oldDiv){
      modal.animate({
        'height':oldDiv.height(),
        'width':oldDiv.width(),
        'top':oldDiv.offset().top,
        'left':oldDiv.offset().left
      },{
        duration:500,
        complete: function(){
          oldDiv.css({opacity:1});
          oldDiv.animate({'opacity':1},{duration:1,complete:function(){
            modal.css({'display':'none'});
            oldDiv = null;
            if(cb) 
              cb();
          }});
        }
      });
    };
  };
 
  $('.someImg').on('click', function(e){
    var jthis = $(this);
    
      function show(){
        modal.css({ 'top':jthis.offset().top,
                'left':jthis.offset().left,
                'width':jthis.width(),
                'height':jthis.height(),
                'opacity':'1',
                'display':'block'
              });
        jthis.css('opacity',0);
        modal.attr({'src':jthis.attr('src')})
        modal.animate({'height':533,'width':800,
                    'top':(window.innerHeight - 450) / 2,
                    'left':(window.innerWidth - 800) / 2},{
            duration: 500,
            specialEasing: {
              height: 'swing',
              width: 'swing'
            }
          });
        oldDiv = jthis;
      }
    if(oldDiv && oldDiv.attr('id') == jthis.attr('id'))
      close();
    else if(oldDiv != null){
      close(show);
    }else{
      show();
    }
  })
 
  $('#modalDiv').on('click', function(){
      close();
  });