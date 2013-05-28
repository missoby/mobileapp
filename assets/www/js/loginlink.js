$(document).ready(function(){
    var id = window.localStorage.getItem('idpersonne');
            
    if(window.localStorage.getItem('login') == null){
              
        $('#auth').append('<a href="login.html" id="login" data-icon="custom" class="ui-btn-active">Login</a>');
        $('#auth').navbar();
    }
    else if (window.localStorage.getItem('type') == 'commercant'){
        $('#auth').append(
            '<a data-ajax="false" id="login" data-icon="custom" href="profilcommercant.html?id=' 
            + id + '">'+window.localStorage.getItem('login')+'</a>');
        $('#auth').navbar();
        $('h1').prepend( '<a href="#" id="logout" class="ui-btn-right" data-role="button" data-icon="delete">Logout</a>');
        $('#logout').buttonMarkup({
            theme: "a"
        });
        //Logout function
        $("#logout").click(function() {
            window.localStorage.clear();
            window.location='login.html';
        });
    }
    else {
        $('#auth').append(
            '<a data-ajax="false" id="login" data-icon="custom" href="profilclient.html?id=' 
            + id + '">'+window.localStorage.getItem('login')+'</a>');
        $('#auth').navbar();
        $('h1').prepend( '<a href="#" id="logout" class="ui-btn-right" data-role="button" data-icon="delete">Logout</a>');
        $('#logout').buttonMarkup({
            theme: "a"
        });
        //Logout function
        $("#logout").click(function() {
            window.localStorage.clear();
            window.location='login.html';
        });
    }
         
});