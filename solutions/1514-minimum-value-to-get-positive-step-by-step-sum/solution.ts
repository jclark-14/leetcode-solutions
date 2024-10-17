function minStartValue(nums: number[]): number {
    let  currMin = 0;
    let sum = 0;
    
    for(let num of nums){
      sum += num;
      currMin = Math.min(sum, currMin)
    }
    
    currMin = Math.max(1, 1 - currMin)
    return currMin
};
