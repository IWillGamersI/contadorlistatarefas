function par(numero){
        
        
        let impares =  []
    for(i = 0; i< numero.length;i++){
        let pares = []
        if(numero[i] % 2 === 0){
            pares.push(numero[i]) 
            console.log(`O número ${pares} é par.`)
        }else{
            impares.push(numero[i]) 
            
        }
    }
    
    console.log(`Os números ${impares} da lista é impar.`)
}

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

par(numeros)