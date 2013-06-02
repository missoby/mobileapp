$(document).ready(function(){
    var url = document.URL; 
    var stuff = url.split('=');
    var id = stuff[stuff.length-1];
    $.ajax({
        type: 'POST',
        data: 'id='+id,
        dataType: 'json',
        url: 'http://10.0.2.2:8081/mobile/listprodmobile/forum_sujet_mobile/',
        //url: 'http://localhost:8081/mobile/listprodmobile/forum_sujet_mobile',
                     
        success: function(data){ 
            $('#sujetdetail').append(
                '<li data-role="list-divider">'+ data['sujetdetail']['nom']
                + '<span class="ui-li-aside">'+ data['sujetdetail']['datepublication']
                + '</span></li>'
                + '<li data-role="fieldcontain"><p style="white-space: normal;"><strong>'
                + data['sujetdetail']['titre'] +'</strong></p>'
                + '<p style="white-space: normal;">'
                + data['sujetdetail']['contenu'] +'</p></li>');
         
            $('#sujetdetail').listview('refresh');
        },
        error: function(){
            alert('il y a un probleme!!');                        
        } 
    });
                
    $.ajax({
        type: 'POST',
        data: 'id='+id,
        dataType: 'json',
        url: 'http://10.0.2.2:8081/mobile/listprodmobile/forum_comm_mobile/',
        //url: 'http://localhost:8081/mobile/listprodmobile/forum_comm_mobile',
                     
        success: function(data){ 
            if (data['comm'].length == 0) {
                $('#commentaire').append('<li data-role="list-divider" data-theme="e"><p style="white-space: normal;margin-top: 0px;color: rgb(255, 112, 0);"><strong> Il n\'existe aucun commentaire </strong></p></li>');
            }
            else{
                for (key in data['comm'])
                {
                    $('#commentaire').append(
                        '<li data-role="list-divider" data-theme="a">'+ data['comm'][key]['client_idclient']
                        + '<span class="ui-li-aside">'+ data['comm'][key]['datepublication']
                        + '</span></li>'
                        + '<li data-role="fieldcontain">'
                        + '<p style="white-space: normal;">'
                        + data['comm'][key]['contenu'] +'</p></li>');
                }
            }
            $('#commentaire').listview('refresh');
        },
        error: function(){
            alert('il y a un probleme!!');                        
        } 
    });
});