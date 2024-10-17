function findMaxAverage(nums: number[], k: number): number {
    let initialSum = 0, ans = 0, curr = 0;
    for(let i = 0; i < k; i++){
        initialSum += nums[i]
    }
    
    curr = initialSum;
     ans = initialSum / k;
    for(let i = k; i < nums.length; i++){
        curr += nums[i] - nums[i - k];
        ans = Math.max(ans, curr / k)
    }
    return ans
};
