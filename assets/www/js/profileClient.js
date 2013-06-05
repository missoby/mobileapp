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