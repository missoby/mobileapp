var serviceURL = localStorage['serviceURL'];

var id = getUrlVars()["id"];
alert(id);

$(window).load(function() {
	setTimeout(getEmployee, 100);
});

$(document).ajaxError(function(event, request, settings) {
	alert("Error accessing the server");
});

function getEmployee() {
	
	$.getJSON(serviceURL + 'http://10.0.2.2:8081/mobile/listprodmobile/listprod/'+id, function(data) {
		
		var employee = data.item;
		console.log(employee);
                for (key in data['produit'])
                            {
                                $('#list').append('<li>' + data['produit'][key]['libelle']  + '</li>');
                            }
	
		setTimeout(function(){
			scroll.refresh();
		});
	});
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
