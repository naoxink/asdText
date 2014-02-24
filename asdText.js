;(function($) {
  $.fn.asd = function(options){
    function contrario(colores){
      colores.r = parseInt(255-colores.r);
      colores.g = parseInt(255-colores.g);
      colores.b = parseInt(255-colores.b);
      return colores;
    }
    var r, g, b, color, bgcolor = 0;
    var div = this;
    
    var text = $(this).text();
    var letters = text.split('');
    for(var i = 0; i < letters.length; i++){
      if(options.rcolor){
        r = parseInt((Math.random()*255)+1);
        g = parseInt((Math.random()*255)+1);
        b = parseInt((Math.random()*255)+1);
        bgcolor = "rgb("+r+", "+g+", "+b+")";
        color = "black";
        if(!options.fcolor){
          if((r+g+b) <= 382){
            color = "white";
          }else{
            color = "black";
          }
        }else{
          var colores = contrario({
            r: r,
            g: g,
            b: b
          });
          color = "rgb("+colores.r+", "+colores.g+", "+colores.b+")";
        }
    }
      if(letters[i] !== ' '){
        letters[i] = "<span style='text-transform:uppercase;font-size: 20px;font-weight: bold; padding: 0px 5px;display: none; background: "+bgcolor+"; color: "+color+";'>"+letters[i]+"</span>";
      }else{
        letters[i] = "<span style='text-transform:uppercase;font-size: 20px;font-weight: bold; padding: 5px;display: none;'>"+letters[i]+"</span>";
      }
    }
    var all = letters.join('');
    $(div).html(all);
    for(i = 0; i < letters.length; i++){
      setTimeout(function(){
        if(options.fade){
          $("span:not(:visible):first", div).fadeIn();
        }else{
          $("span:not(:visible):first", div).show();
        }
      }, (i*150));
    }
  };
})(jQuery);
