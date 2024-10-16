function sortedSquares(nums: number[]): number[] {
    let squaredArr = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let position = nums.length -1;

    while(left <= right){
        let leftSqr = nums[left] * nums[left];
        let rightSqr = nums[right] * nums[right];

        if (leftSqr > rightSqr){
            squaredArr[position] = leftSqr;
            left++
        }else{
            squaredArr[position] = rightSqr;
            right--
        }
        position--
    }
    return squaredArr
};
