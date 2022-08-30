function writeCards(array, event){
    const thankYous = [];
    for (name in array){
        thankYous.push(`Thank you, ${array[name]}, for the wonderful ${event} gift!`)
    }
    return thankYous;
}

function countDown(x){
    while (x >= 0){
        console.log(x);
        x --;
    }
}
