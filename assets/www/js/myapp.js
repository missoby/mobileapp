
	function addToPanier(tx)
	{
		var idproduit = $('#detailprodpanier').data('idproduit');
		var nomproduit = $('#detailprodpanier').data('nomproduit');
		var prix = $('#detailprodpanier').data('prix');
                var idclient = $('#detailprodpanier').data('idclient');

		tx.executeSql('insert into PANIER (idproduit, idclient, nomproduit, prix) values("'+ idproduit +'","' + idclient +'","' + nomproduit +'","' + prix +'")', [], alert('Produit ajouter dans votre panier avec sucess'));

               // window.localStorage.setItem("panier", 1);
                window.location='panier.html';
	}

	function add(){
		
		var db = window.openDatabase('platforme', '1.0', 'add to base', 200000);
		db.transaction(addToPanier, errorCB);
	}
	

	function errorCB(err)
	{
		console.log('Error processing SQL:' +err.code);
	}