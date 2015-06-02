function getContent () {
    $(document).ready(function(){
          var $_GET = getUrlVars(); //Get parameters
          
          var ordine = 'alfabetico';
          var id_categoria;
        
          id_categoria = $_GET.id_categoria;
          ordine = $_GET.ordine;
        
          var send = '';
          if(ordine == 'alfabetico') { send = 'ordine=' + ordine; }
          if(ordine == 'livello') { send = 'ordine=' + ordine; }
          if(ordine == 'categoria') { 
              if(id_categoria != null) { send = 'ordine=' + ordine + '&id_categoria=' + id_categoria; }
              else { send = 'ordine=' + ordine; }
          
          }
          
              
        $.ajax({ // ajax call starts
          url: './php/lista_corsi.php', // JQuery loads serverside.php
          data: send, // Send value of the clicked button
          dataType: 'json', // Choosing a JSON datatype
        })
        .done(function(data) { // Variable data contains the data we get from serverside
          $('.inner_content').html(''); // Clear #content div
        
              
              var text = '';
            
            
            //ORDINE ALFABETICO
            if(ordine == null || ordine == 'alfabetico') {
                $('#select1').addClass("selected");
                //INFO ORIENTATIVE
                $('#tree_info').html('<h1><a href="lista_corsi.html">Corsi</a> > In ordine alfabetico</h1>');
                
                var letteraIniziale;
                var letteraPrecedente;
                
                letteraPrecedente = "";
                for(var i = 0; i < data.id_corso.length; i++) {
                    letteraIniziale = data.nome_corso[i].split("")[0].toLocaleLowerCase();
                    if(letteraIniziale != letteraPrecedente) {
                        text += '</ul><h2>'+ letteraIniziale.toUpperCase() +'</h2><ul>';
                        letteraPrecedente = letteraIniziale;
                    }
                    text += '<li><strong><a href="corso.html?id='+ data.id_corso[i] +'">' + data.nome_corso[i] + '</a> - Categoria: <a href="categoria.html?id='+ data.id_categoria[i] +'">'+ data.nome_categoria[i] +'</a> - Difficolt&aacute;: ' + data.livello_corso[i] + '</strong></li>' + data.descrizione_breve_corso[i];
                }
                text += '</ul></div>';

            }
            //ORDINE PER CATEGORIA
            if(ordine == 'categoria') {
                $('#select2').addClass("selected");
                //INFO ORIENTATIVE
                $('#tree_info').html('<h1><a href="lista_corsi.html">Corsi</a> > Ordinati per categoria</h1>');
                var categoriaIniziale;
                var categoriaPrecedente;
                
                categoriaPrecedente = "";
                for(var i = 0; i < data.id_corso.length; i++) {
                    categoriaIniziale = data.nome_categoria[i].toLocaleLowerCase();
                    if(categoriaIniziale != categoriaPrecedente) {
                        text += '</ul><h2>'+ categoriaIniziale.toUpperCase() +'</h2><ul>';
                        categoriaPrecedente = categoriaIniziale;
                    }
                    text += '<li><strong><a href="corso.html?id='+ data.id_corso[i] +'">' + data.nome_corso[i] + '</a> - Categoria: <a href="categoria.html?id='+ data.id_categoria[i] +'">'+ data.nome_categoria[i] +'</a> - Difficolt&aacute;: ' + data.livello_corso[i] + '</strong></li>' + data.descrizione_breve_corso[i];
                }
                text += '</ul></div>';
                
            }
            
            //ORDINE PER LIVELLO
            if(ordine == 'livello') {
                $('#select3').addClass("selected");
                //INFO ORIENTATIVE
                $('#tree_info').html('<h1><a href="lista_corsi.html">Corsi</a> > Ordinati per livello</h1>');
                var livelloIniziale;
                var livelloPrecedente;
                
                livelloPrecedente = "";
                for(var i = 0; i < data.id_corso.length; i++) {
                    livelloIniziale = data.livello_corso[i].toLocaleLowerCase();
                    if(livelloIniziale != livelloPrecedente) {
                        text += '</ul><h2>DIFFICOLT&Agrave; '+ livelloIniziale.toUpperCase() +'</h2><ul>';
                        livelloPrecedente = livelloIniziale;
                    }
                    text += '<li><strong><a href="corso.html?id='+ data.id_corso[i] +'">' + data.nome_corso[i] + '</a> - Categoria: <a href="categoria.html?id='+ data.id_categoria[i] +'">'+ data.nome_categoria[i] +'</a></strong></li>' + data.descrizione_breve_corso[i];
                }
                text += '</ul></div>';
            }
            
              $('.inner_content').append(text)
              
        });
        return false; // keeps the page from not refreshing 
    })
};




