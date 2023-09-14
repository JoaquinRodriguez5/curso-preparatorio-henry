function condicionCompleta(num) {
    if (num > 9 &&  num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}

condicionCompleta(10);
condicionCompleta(6);
condicionCompleta(3);
condicionCompleta(5);
