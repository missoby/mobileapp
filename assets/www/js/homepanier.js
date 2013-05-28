
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady()
	{
		var db = window.openDatabase('platforme', '1.0', 'open base', 200000);
		db.transaction(createDB, errorCB, successCB);
	}

	function createDB(tx)
		{
			//tx.executeSql('DROP TABLE IF EXISTS PANIER');
			tx.executeSql('CREATE TABLE IF NO EXISTS PANIER (idproduit, idclient, nomproduit, prix)');
                        alert('ala my love');
		} 

		function errorCB(err)
	{
		console.log('Error processing SQL:' +err.code);
	}

	function successCB() {
        alert("success!");
    }