function distFromAverage(array) {
    var averageSum = 0;
    for (let i = 0; i < array.length; i++) {
        averageSum += array[i];
    }

    var averageValue = averageSum / array.length;
    const outputArray = [];

    for (let i = 0; i < array.length; i++) {
        outputArray.push(array[i] - averageValue);
    }

    console.log(outputArray);
    return outputArray;
}

distFromAverage([1, 2, 3, 4, 5, 6, 7]);

var array = ['apple', 'bannana', 'pear', 'orange'];

console.log(array[0]);

console.log(array[array.length - 1]);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

function printTable(array) {
    for (let i = array.length; i >= 0; i--) {
        console.log(array[i]);
    }
}

printTable([1, 2, 3]);
