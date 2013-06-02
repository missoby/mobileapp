$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
           
    function onDeviceReady()
    {		
        var db = window.openDatabase('platforme', '1.0', 'open base', 200000);
        db.transaction(createDB, errorCB);
    }

    function createDB(tx)
    {
        tx.executeSql('SELECT * FROM PANIER', [], querySuccess, errorCB);
    } 

    function errorCB(err)
    {
        console.log('Error processing SQL:' +err.code);
    }
    function querySuccess(tx, results)
            {
                len = results.rows.length;
                
                for (var i=0; i<len; i++){
                    $("#td").after('<tr><td>'
                        +results.rows.item(i).nomproduit+'</td><td>'
                        +results.rows.item(i).prix+'</td></tr>') ;
                    $("#table").table( "refresh" );
                    
                }
            }
        
    
});