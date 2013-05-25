
$(document).ready(function(){
	document.addEventListener("deviceready", onDeviceReady, false);

    	$('form').on('submit', function(event){
    			
    			var postData = $(this).serialize();
    			event.preventDefault();
				
				$.ajax({
					type: 'POST',
					data: postData,
                    dataType: 'json',
                    //cache: false,
                    url: 'http://smartshare.ovynet.com/phonelogin/login',
					//url: 'http://localhost:8094/phonelogin/login',
                    //url: 'http://10.0.2.2:8094/phonelogin/login',
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
                $('#iderror').remove();
                //navigator.notification.alert('id: '+res['id']+' nom: '+res['nom'], false, 'vous êtes connecté', 'OK');
                window.localStorage.setItem("id", res['id']);
                window.localStorage.setItem("nom", res['nom']);
                window.location='./main.html';
            }
            else{
                // navigator.notification.alert(res['error'], false, 'Erreur de connexion', 'OK');
                $('#iderror').remove();  
                $('#locationerror').after('<div class="alert alert-error" id="iderror"> <a class="close" data-dismiss="alert" href="#">×</a>'+res['error'] +'</div>');
            }
        }

function onDeviceReady() {
    //alert('readyyy');
}


});



