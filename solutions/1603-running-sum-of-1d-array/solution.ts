function runningSum(nums: number[]): number[] {
    let sumArr = []
    for(let i = 0; i < nums.length; i++){
     if (i===0){
        sumArr.push(nums[i])
     }else{
        let sum = sumArr[i - 1] + nums[i];
        sumArr.push(sum)
     }
    }
    return sumArr
};
