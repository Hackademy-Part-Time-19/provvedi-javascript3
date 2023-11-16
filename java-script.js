let array = ["franco","gennaro","valerio","giulia","eugenio"]

let indice = 0

while(indice<array.length){
    console.log(array[indice])
    indice++}



    while(indice<array.length){
     console.log(array[indice])
     indice++
     let indice2=0
     while(indice2<array[indice].length){
          console.log(array[indice][indice2])
          indice2++
     }
     
    }




    let soldi= 3000

    let saluto

    while(saluto!= 3){
        saluto=parseInt(prompt("salve,prema 1 per bonifico,prema 2 per prelievo, premi 3 per uscire"))
        let soldipagati= parseInt(prompt("inserisci pagamento"))

        switch(saluto){

            case 1:
                if(soldi-soldipagati>=0){
                    let risposta= prompt("inserisci il tuo IBAN")
                    soldi=soldi-soldipagati;

                    alert("adesso hai"+ ""+soldi)
                }
                else{
                    alert("soldi insufficienti")
                }

                break;

            case 2:
                if(soldi-soldipagati>=0){
                    soldi=soldi-soldipagati;

                    alert("adesso hai"+""+soldi)
                }

                else{
                    alert("soldi insufficienti")
                }

            case 3:
                alert("arrivederci")
                break;
        }

        

    }




 n=0


    while(n<=400){
       if(n%20==0){
        console.log(n+"è divisibile per 20")
        n++
       }
        
    }