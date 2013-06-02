
$(document).ready(function(){
    var url = document.URL; // Get current url
    var stuff = url.split('=');
    var idd = stuff[stuff.length-1];
                
    $.ajax({
        type: 'POST',
        data: 'id='+idd,
        dataType: 'json',
        //cache: false,
        url: 'http://10.0.2.2:8081/mobile/listprodmobile/commercantinfo/',
        //url: 'http://localhost:8081/mobile/listprodmobile/commercantinfo',
                     
        success: function(data){  
                     
            $("#info").append(
                '<li data-role="list-divider">'
                + data['commercant']['societe']  
                +'<span class="ui-li-aside">'+data['commercant']['siteweb']
                +'</span></li><li data-role="fieldcontain"><p style="white-space: normal;"><strong> '
                + data['commercant']['adrsoc'] 
                + '</strong><span class="ui-li-aside">'+ data['commercant']['telpro'] 
                + '</span></p><p style="white-space: normal;">'+ data['commercant']['descsoc']+ '</p></li>'
                );
            $('#info').listview('refresh');
        },
        error: function(){
            alert('il y a un probleme!!');                        
        } 
    });
                    
    $.ajax({
        type: 'POST',
        data: 'id='+idd,
        dataType: 'json',
        //cache: false,
        url: 'http://10.0.2.2:8081/mobile/listprodmobile/prodcommmobile/',
        // url: 'http://localhost:8081/mobile/listprodmobile/prodcommmobile',
                     
        success: function(data){  
                            
            if (data['produit'].length == 0) {
                '<li data-role="fieldcontain"><p style="white-space: normal;"> Aucun Avis Existant</p></li>'
            }
            else{
                for (key in data['produit'])
                {
                             
                    var prod = data['produit'][key]['idproduit'];
                    var urlimg = 'http://10.0.2.2:8081/uploads/';
                    //  var chaine = "produitdetail( " + prod + " )";
                    $('#list').append(
                        '<li><a data-ajax="false" href="detailprod.html?id=' + prod + '" >'+
                        '<img style="width: 100%;height: 100%" src="'+ urlimg + data['produit'][key]['photo'] +'"/>'+
                        '<h2>'+data['produit'][key]['libelle'] + '</h2></a></li>');
                               
                }
            }
            $('#list').listview('refresh');
                         
 
        },
        error: function(){
            alert('il y a un probleme!!');                        
        } 
    });
                    
                    
    $.ajax({
        type: 'POST',
        data: 'id='+idd,
        dataType: 'json',
        //cache: false,
        url: 'http://10.0.2.2:8081/mobile/listprodmobile/annoncemobile/',
        //url: 'http://localhost:8081/mobile/listprodmobile/annoncemobile',
                     
        success: function(data){  
                            
            if (data['annonce'].length == 0) {
                '<li data-role="fieldcontain"><p style="white-space: normal;"> Aucun Avis Existant</p></li>'
            }
            else{
                for (key in data['annonce'])
                {
                             
                    var prod = data['annonce'][key]['idannonce'];
                    var urlimg = 'http://10.0.2.2:8081/uploads/';
                    //  var chaine = "produitdetail( " + prod + " )";
                    $('#annonce').append(
                        '<li><a data-ajax="false" href="detailprod.html?id=' + prod + '" >'+
                        '<img style="width: 100%;height: 100%" src="'+ urlimg + data['annonce'][key]['photo'] +'"/>'+
                        '<h2>'+data['annonce'][key]['titre'] + '</h2></a></li>');
                               
                }
            }
            $('#annonce').listview('refresh');
                         
 
        },
        error: function(){
            alert('il y a un probleme!!');                        
        } 
    });
});
                    
