//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i == 5){
        console.log("5 is lucky number")
    }
    console.log(element)
}

for (let i = 0; i <= 10; i++) {
    console.log(`OuterLoop ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`InnerLoop ${j} and I Value${i}`);

        console.log(`${i} * ${j} = ${i * j}  `)

    }
}

const heros = ["Ironman", "Captian", "Hulk"]

for (let i = 0; i < heros.length; i++) {
    const element = heros[i];
    console.log(element);
}

//when we uses loop in api, sometime i have to stop loop in middle when the conndition is full fill
//so we use break and continue

for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log('loop reached in 5 position');
        break;
    }
    console.log(`Value of i is : ${i}`);
}

for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log('loop reached in 5 position');
        continue;
    }
    console.log(`Value of i is : ${i}`);
}