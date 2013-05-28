	function queryDB(tx)
	{
		tx.executeSql('SELECT * FROM ARTISTE', [], querySuccess, errorCB);
		// requete, where, success, error
	}

	function successCB()
	{
		var db = window.openDatabase('ma_base', '1.0', 'PhoneGap test', 200000);
		//la base de donnee, version, descriptif, taille en octet des donnee a reterer(max 50 Mo)
		db.transaction(queryDB, errorCB);
	}

	function querySuccess(tx, results)
	{
		var taille = results.rows.lenght;
		$('#artiste').empty();
		var valeur = '';
		for(var i=0; i<taille;i++ )
		{
			valeur += '<li data-theme="c"> <a href="#"><img src="image.jpg">';
			valeur += '<h3>'+ results.rows.item(i).name + '</h3>';
			valeur += '<p>' + results.rows.item(i).description + '</p>';
			valeur += '</a> </li>';
			$('#artiste').append(valeur);
		}
	}

	function addToPanier(tx)
	{
		var idproduit = $('#detailprodpanier').data('idproduit');
		var nomproduit = $('#detailprodpanier').data('nomproduit');
		var prix = $('#detailprodpanier').data('prix');

		//tx.executeSql('insert into PANIER values('+ idproduit +', ' + nomproduit +', ' + prix +')', [], alert('success save'), alert('wrong save !!'));
		tx.executeSql('insert into PANIER (idproduit, idclient, nomproduit, prix) values("aa", "bbb", "cc", "dd")', [], alert('success save'), alert('wrong save !!'));
	}

	function add(){
		
		var db = window.openDatabase('platforme', '1.0', 'add to base', 200000);
		db.transaction(addToPanier, errorCB);
	}
	

	function errorCB(err)
	{
		console.log('Error processing SQL:' +err.code);
	}