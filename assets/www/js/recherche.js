$(document).ready(function(){
                var url = document.URL; // Get current url
                var stuff = url.split('=');
                var mot = stuff[stuff.length-1];
                    $.ajax({
                        type: 'POST',
                        data: 'mot='+mot,
                        dataType: 'json',
                        //cache: false,
                        url: 'http://10.0.2.2:8081/mobile/listprodmobile/recherche_mobile/',
                        //url: 'http://localhost:8081/mobile/listprodmobile/recherche_mobile',
                     
                        success: function(data){ 
                          if (data['produit'].length == 0) {
                           $('#list').append('<li data-role="list-divider" data-theme="e"><p style="white-space: normal;margin-top: 0px;color: rgb(255, 112, 0);"><strong> Il n\'existe aucun produit correspendant a ce terme '+mot+'</p></strong></li>');
                           }
                                else{
                        for (key in data['produit'])
                            {
                                var prod = data['produit'][key]['idproduit'];
                                var urlimg = 'http://10.0.2.2:8081/uploads/';
                              //  var chaine = "produitdetail( " + prod + " )";
                                $('#list').append(
                                    '<li><a data-ajax="false" href="detailprod.html?id=' + prod + '" >'+
                                    '<img style="width: 100%;height: 100%" src="'+ urlimg+ data['produit'][key]['photo']  
                                    +'"/><h2>'+ data['produit'][key]['libelle']  +
                                    '</h2></a></li>');
                        
                                }
                                    }
                        $('#list').listview('refresh');
                        },
                        error: function(data){
                            alert(data['produit']);
                            alert('il y a un probleme!!');                        
                        } 
                    });

             });
             