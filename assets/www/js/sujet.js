     $(document).ready(function(){
                var url = document.URL;
                var stuff = url.split('=');
                var id = stuff[stuff.length-1];
                $.ajax({
                    type: 'POST',
                    data: 'id='+id,
                    dataType: 'json',
                    url: 'http://10.0.2.2:8081/mobile/listprodmobile/forum_listsujet_mobile/',
                    //url: 'http://localhost:8081/mobile/listprodmobile/forum_listsujet_mobile',
                    success: function(data){ 
                         if (data['sujet'].length == 0) {
                            $('#sujet').append('<li data-role="list-divider" data-theme="e"><p style="white-space: normal;margin-top: 0px;color: rgb(255, 112, 0);"><strong> Il n\'existe aucun sujet dans cette categorie </strong></p></li>');
                        }
                        else{
                        for (key in data['sujet'])
                        {    
                            var prod = data['sujet'][key]['idsujet'];
                            $('#sujet').listview('refresh').append(
                            '<li><a data-ajax="false" href="detailsujet.html?id=' + prod + '">'
                            +'<h2>'+ data['sujet'][key]['titre'] +'</h2>'
                            +'<p class="ui-li-aside"><strong>'+ data['sujet'][key]['datepublication']
                            +'</strong></p></a></li>'
                        );
                            $('#sujet').listview('refresh');
                        }
                        }
                    },
                    error: function(){
                        alert('il y a un probleme!!');                        
                    } 
                });

            });
             