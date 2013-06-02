$(document).ready(function(){
    $('form').on('submit', function(event){
        var postData = $(this).serialize();
        event.preventDefault();
        $.ajax({
            type: 'POST',
            data: postData,
            dataType: 'json',
            //cache: false,
            //url: 'http://localhost:8081/mobile/listprodmobile/login',
            url: 'http://10.0.2.2:8081/mobile/listprodmobile/login',
            success: function(resultat){
                traitementok(resultat);
            },
            error: function(resultat){
                alert(resultat);
                alert('il y a un probleme!!');                        
            }
        });
	
    });

    function traitementok(res){
        if(res['error'] == 0){
            alert('Bienvenue',res['login']);
            window.localStorage.setItem("idpersonne", res['idpersonne']);
            window.localStorage.setItem("login", res['login']);
            window.localStorage.setItem("type", res['type']);
            window.localStorage.setItem("email", res['email']);
            window.localStorage.setItem("adresse", res['adresse']);
            window.localStorage.setItem("pays", res['pays']);
            window.localStorage.setItem("ville", res['ville']);
            window.localStorage.setItem("nom", res['nom']);
            window.localStorage.setItem("prenom", res['prenom']);
            window.localStorage.setItem("tel", res['tel']);
     
            window.location='index.html';
			 
        }
        else{
            $('hr').prepend('<div class="ui-bar ui-bar-e"><h3>'+res['error'] +'</h3></div>');
        }
    }

});