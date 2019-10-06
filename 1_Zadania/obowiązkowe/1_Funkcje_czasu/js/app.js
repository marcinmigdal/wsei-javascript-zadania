function countHello(number) {
    var c = 1;
    var interval = setInterval(() => {

        console.log('Hello', c++)
        if (c > number) {
            clearInterval(interval);
        }
    }, 500); 
}

countHello(5);
