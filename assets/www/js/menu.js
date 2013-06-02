$(document).ready(function(){
    var id = window.localStorage.getItem('idpersonne');
            
    if(window.localStorage.getItem('login') == null){
        $('#auth').append('<a data-ajax="false" href="login.html" id="login" data-icon="custom">Login</a>');
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
    }
    else {
        $("#menu").attr('data-grid',"d"); 
        $("#menu ul").attr('class', "ui-grid-d");
        $('#for').after('<li id="cart" class="ui-block-d ui-navbar ui-mini"><a data-ajax="false" id="panier" data-icon="custom" href="panier.html">Panier</a></li>');
        $('#cart').navbar();
        $('#auth').append(
            '<a data-ajax="false" id="login" data-icon="custom" href="profilclient.html?id=' 
            + id + '">'+window.localStorage.getItem('login')+'</a>');
        $('#auth').navbar();
        $("#menu ul li#auth").attr('class', "ui-block-e ui-navbar ui-mini");
        $('h1').prepend( '<a data-ajax="false" href="#" id="logout" class="ui-btn-right" data-role="button" data-icon="delete">Logout</a>');
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