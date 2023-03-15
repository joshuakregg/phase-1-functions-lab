// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block - 42;
    }
    else{
        return 42 - block;
    }
}

function distanceFromHqInFeet(block) {
    let blocks
    if (block > 42) {
         blocks =  block - 42;
    }
    else{
         blocks = 42 - block;
    }

    return blocks * 264
}

function distanceTravelledInFeet(start, end) {
    if (end < start) {return (start - end) * 264}
    return (end - start) * 264
}

function calculatesFarePrice(start, destination) {
    const dist = Math.abs(destination - start) * 264;
    let price;
    switch (true) {
        case (dist <= 400):
            console.log(dist);
            price = 0;
            break;
        case (dist > 400 && dist <= 2000):
            price = (dist - 400) * 0.02;
            break;
        case (dist > 2000 && dist <= 2500):
            price = 25;
            break;
        case (dist > 2500) :
            return 'cannot travel that far';
    
    }
    return price;
}