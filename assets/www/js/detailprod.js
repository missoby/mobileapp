 $(document).ready(function(){
    // Get id from url
    var url = document.URL; 
    var stuff = url.split('=');
    var idd = stuff[stuff.length-1];
    // détails produit
    $.ajax({
        type: 'POST',
        data: 'id='+idd,
        dataType: 'json',
        url: 'http://10.0.2.2:8081/mobile/listprodmobile/detailprod/',
        //url: 'http://localhost:8081/mobile/listprodmobile/detailprod',
                     
        success: function(data){  
            var urlimg = 'http://10.0.2.2:8081/uploads/';
            var note='';
            for(i=1; i<=data['detail']['note']; i++){
                note += '<img style="margin-left:5px;"src="img/star-on.png">';
            }
            $(".fournisseur").append('<a data-ajax="false" href="commercant.html?id='
                + data['detail']['commercant_idcommercant'] + '" > Fournisseur produit</a>'  
                );
            $(".fournisseur").navbar();    
            $("#detail").append(
                '<span id="detailprodpanier" data-idproduit="'+data['detail']['idproduit']
                +'" data-nomproduit="'+data['detail']['libelle']+'" data-prix="'
                +data['detail']['prix'] +'"data-idclient="'+window.localStorage.getItem('idpersonne')+
                '"></span><h3>'+ data['detail']['libelle']+'</h3><hr><img  class="hero" style="width: 294px;height:124px" src="'
                + urlimg+ data['detail']['photo']  
                +'"/> <p style="margin-left: 30%;">'+note+'</p><h4 style="color: rgb(177, 6, 12);">Descritpion :</h4><p>'+ data['detail']['description']
                + '</p>'
                +'<h4 style="color: rgb(177, 6, 12);">Stock : <span style="color: black">'+ data['detail']['stock']
                + '</h4></span>'
                +'<h4 style="color: rgb(177, 6, 12);">Prix : <span style="color: black">'+ data['detail']['prix']
                + 'DT</h4></span>' );
        },
        error: function(){
            alert('il y a un probleme!!');                        
        } 
    });
    //liste des avis
    $.ajax({
        type: 'POST',
        data: 'id='+idd,
        dataType: 'json',
        url: 'http://10.0.2.2:8081/mobile/listprodmobile/avismobile/',
        //url: 'http://localhost:8081/mobile/listprodmobile/avismobile',
                     
        success: function(data){  
            if (data['avis'].length == 0) {
                $('#avis').append('<li data-role="list-divider" data-theme="e"><p style="white-space: normal;margin-top: 0px;color: rgb(255, 112, 0);"><strong> Il n\'existe aucun Avis </strong></p></li>');
            }
            else{
                for (key in data['avis'])
                {  
                    date = data['avis'][key]['datepublication'];
                    $('#avis').append(
                        '<li data-role="list-divider">'
                        + data['avis'][key]['client_idclient']  
                        +'<span class="ui-li-aside">'+date
                        +'</span></li><li data-role="fieldcontain"><p style="white-space: normal;"> '
                        + data['avis'][key]['contenu']
                        + '</p></li>'
                        );
                    $('#avis').listview('refresh');
                }
            }
        },
        error: function(){
            alert('il y a un probleme!!');                        
        } 
    });
});
        