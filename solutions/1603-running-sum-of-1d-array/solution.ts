function runningSum(nums: number[]): number[] {
    const prefix = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        prefix.push(nums[i] + prefix[i-1])
    }
    return prefix
};
