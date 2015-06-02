function getFooter () {
    $(document).ready(function(){
          var $_GET = getUrlVars(); //Get parameters
          var send = 'nome_pagina=Footer';
          
              
        $.ajax({ // ajax call starts
          url: './php/pagina.php', // JQuery loads serverside.php
          data: send, // Send value of the clicked button
          dataType: 'json', // Choosing a JSON datatype
        })
        .done(function(data) { // Variable data contains the data we get from serverside
          $('.footer').html(''); // Clear #content div
        
              
              var text = '' + data.descrizione;
              $('.footer').append(text)
              
        });
        return false; // keeps the page from not refreshing 
    })
};