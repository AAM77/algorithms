// I have a coin that I flip
// I want to find the average number of times it will take with get to heads
// So, I would flip a coin and count how many flips it takes me to get two Heads in a row
// One way to find the average is to carry out the operation a hundred times
// And store the counts in an array
// And then take the average of the number of all the counts by summing them up and dividing by 100


// declare an experimentCount and assign it a value of 0
// create a flipCounts variable and assign it an empty array
// create an array of coin with an 'h' and a 't'

// **LOOP**
// while experimentCount is less than 1000
//      create an array coinSides
//      create a numHeads = 0

//      **LOOP**
//      while numHeads < 2
    //      declare a flipCount variable and assign it a value of 0

    //      flip a coin (choose randomly from the h/t array)
    //      increment the flipCount by 1

    //      if the flip result is a heads, increment numHeads
    //      else reset numHeads to zero

    //      if numHeads is 2
    //      append flipCount to flipCounts
    // increment


// Once loop is finished:
// return the sum of flipCounts/1000


const countFlipsRequired = () => {
    let experimentCount = 0;
    let flipCounts = [];
    const coin = ['heads', 'tails'];


    while (experimentCount < 1000) {
        numHeads = 0;
        let flipCount = 0;

        while (numHeads < 2) {
            let coinFlip = coin[Math.floor(Math.random() * 2)];
            flipCount += 1;

            if (coinFlip === 'heads') {
                numHeads += 1;
            } else {
                numHeads = 0;
            }

            if (numHeads === 2) {
                flipCounts.push(flipCount);
            }
        }
        experimentCount += 1;
    }

    return sum(flipCounts)/1000
}

const sum = (arr) => {
    if (arr.length === 1) return 0
    return arr[0] + sum(arr.slice(1));
}



//      **LOOP**
//      while numHeads < 2
    //      

    //      flip a coin (choose randomly from the h/t array)
    //      increment the flipCount by 1

    //      if the flip result is a heads, increment numHeads
    //      else reset numHeads to zero

    //      if numHeads is 2
    //      append flipCount to flipCounts


// Once loop is finished:
// return the sum of flipCounts/100