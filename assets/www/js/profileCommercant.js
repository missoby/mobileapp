 $(document).ready(function(){
            $('#block1').append(
              '<p><strong style="color: rgb(177, 6, 12);">Nom : </strong>'+window.localStorage.getItem('nom')+'</p>'
              +'<p><strong style="color: rgb(177, 6, 12);">Prénom : </strong>'+window.localStorage.getItem('prenom')+'</p>'
              +'<p><strong style="color: rgb(177, 6, 12);">Login : </strong>'+window.localStorage.getItem('login')+'</p>'
              +'<p><strong style="color: rgb(177, 6, 12);">Pays : </strong>'+window.localStorage.getItem('pays')+'</p>'
          );
              $('#block2').append(
              '<p><strong style="color: rgb(177, 6, 12);">ville : </strong>'+window.localStorage.getItem('ville')+'</p>'
              +'<p><strong style="color: rgb(177, 6, 12);">Adresse : </strong>'+window.localStorage.getItem('adresse')+'</p>'
              +'<p><strong style="color: rgb(177, 6, 12);">Téléphone : </strong>'+window.localStorage.getItem('tel')+'</p>'
              +'<p><strong style="color: rgb(177, 6, 12);">Email : </strong>'+window.localStorage.getItem('email')+'</p>'
          );
           
        });
        
// $(document).ready(function(){
//                var url = document.URL; // Get current url
//                var stuff = url.split('=');
//                var idd = stuff[stuff.length-1];
//               
//                    $.ajax({
//                        type: 'POST',
//                        data: 'id='+idd,
//                        dataType: 'json',
//                        //cache: false,
//                       url: 'http://10.0.2.2:8081/mobile/listprodmobile/commercantprofil/',
//                     // url: 'http://localhost:8081/mobile/listprodmobile/commercantprofil',
//                     
//                        success: function(data){  
//                           // alert(data['commercant']);
//                           // alert(data['commercant']['adrsoc']);
//                            
//                            $("#block3").append(
//                                '<p><strong style="color: rgb(177, 6, 12);">Téléphone : </strong>'+
//                                data['commercant']['societe']+'</p>'
//                                +'<p><strong style="color: rgb(177, 6, 12);">Adresse Société : </strong>'
//                                +data['commercant']['adrsoc'] +'</p>'+
//                                '<p><strong style="color: rgb(177, 6, 12);">Téléphone : </strong>'+data['commercant']['telpro']+'</p>'
//                       
//                            );
//                              $('#block3').trigger("create");
//                                
//                     },
//                        error: function(){
//                            alert('il y a un probleme!!');                        
//                        } 
//                    });
//                        });
