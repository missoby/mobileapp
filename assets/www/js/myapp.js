
	function addToPanier(tx)
	{
		var idproduit = $('#detailprodpanier').data('idproduit');
		var nomproduit = $('#detailprodpanier').data('nomproduit');
		var prix = $('#detailprodpanier').data('prix');

		tx.executeSql('insert into PANIER values('+ idproduit +', ' + nomproduit +', ' + prix +')', [], alert('success save'));

                window.localStorage.setItem("panier", 1);
                window.location='index.html';
	}

	function add(){
		
		var db = window.openDatabase('platforme', '1.0', 'add to base', 200000);
		db.transaction(addToPanier, errorCB);
	}
	

	function errorCB(err)
	{
		console.log('Error processing SQL:' +err.code);
	}