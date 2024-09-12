


function isFibonacci(number){
    // A sequência de fibonacci tem dois valores iniciais, 0 e 1
    if(number<0){
        return false
    }
    

    const fibonacci= [0,1]

    while(fibonacci[fibonacci.length -1]<=number){
        const nextNumber = fibonacci[fibonacci.length -1]+fibonacci[fibonacci.length -2]

        fibonacci.push(nextNumber)
    }

    return fibonacci.includes(number)

}


const number = 3 //Varie esse valor para testar a função

if(isFibonacci(number)){
    console.log('O número pertence a sequencia de Fibonacci.')
}else{
    console.log('O número não pertence a sequencia de Fibonacci.')
}

