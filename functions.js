'use strict';

/* function logger() {
    console.log('My name is LEandro');
}

//caling / running / invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, orange) {
    console.log(apples, orange);
    const juice = `juice with ${apples} apples and ${orange} oranges.`;
    return juice;
}

const aplleJuice = fruitProcessor(5, 0);
console.log(aplleJuice); */

//2 times one of is Sao oaulo and another is palmeiras 
// last 3 classification points  in brasileiro is 68, 59, 60
//Palmeiras 70, 49, 70

let average = (a, b, c) => (a + b + c) /3;
let result = average(150, 100, 160);
console.log(`The time of Tricolor media was ${result.toFixed (2)} points`);

let palmeirasResult = average(70, 49, 70);
console.log(`The time of BigGreen media was ${palmeirasResult.toFixed (2)} points`);

let checkWinner = function (saopauloscore, palmeirascore) {
    if (saopauloscore >= 2* palmeirascore) 
    {console.log(`Sao Paulo is the grater Winner with ${result.toFixed(2)}`);
}
else if (palmeirascore >= 2* saopauloscore) 
    {console.log(`Palmeiras is the winner with ${palmeirasResult.toFixed(2)}`);

}
else {
    console.log("Nenhum Vencedor")
}

}
checkWinner(result, palmeirasResult);


