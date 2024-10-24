function generateRandomArray(length) {
    const arr = []; 
    
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1; 
        arr.push(randomNum); 
    }

    return arr; 
}

const randomArray = generateRandomArray(5); 
console.log(randomArray);
