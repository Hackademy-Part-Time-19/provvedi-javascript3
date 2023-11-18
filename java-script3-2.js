
//esercizio banca


let soldi=3000



alert("salve e benvenuto in banca")

let saluto

while(saluto != 3){
     saluto= parseInt(prompt("prema 1 per bonifico, prema 2 per prelievo, prema 3 per uscire"))
    

    switch(saluto){

        case 1: let soldispesi=parseInt(prompt("immetti la cifra"))
                 if(soldispesi<=soldi){
                    parseInt(prompt("immetti Iban"))
                    soldi=soldi-soldispesi
                    alert("adesso hai"+" "+soldi+" "+"euro")
                 }
                 else{
                    alert("mi dispiace ma non hai abbastanza soldi")
                 }
                
                 break;

                 
        case 2: let soldiusati=parseInt(prompt("immetti la cifra"))
                if(soldiusati<=soldi){
                    alert("pagamento andato a buon fine")
                    soldi=soldi-soldiusati
                    alert("adesso hai"+" "+soldi+" "+"euro")
                }
                else{
                    alert("mi dispiace ma non hai abbastanza soldi")
                }
                
                break;

        case 3: alert("arrivederci e grazie")
                 
    }
}

    let uscita= alert("sei uscito dal loop")
        
