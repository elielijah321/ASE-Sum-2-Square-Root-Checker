export const calculateSquareRoot = (num: number): number  => {
    
    // Calculate the square root of the input number
    const sqrt = Math.sqrt(num);

    return sqrt;
}

export const isSquareNumber = (num: number): boolean  => {
    
    const sqrt = calculateSquareRoot(num);

    // Check if the square root is an integer by comparing it to the floor of itself
    return sqrt === Math.floor(sqrt);
}