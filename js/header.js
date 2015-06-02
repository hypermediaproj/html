function getHeader(id) {
    $( document ).ready(function() {
      $( "#header" ).load( "header.html" , function() { 
          if(id != null) {
          $('#' + id).addClass('selected');
          }
      });
      
    });
}

