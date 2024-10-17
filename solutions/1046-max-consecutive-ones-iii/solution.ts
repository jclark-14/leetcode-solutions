function longestOnes(nums: number[], k: number): number {
    let zeroes = 0, ans = 0, left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0) zeroes++;

        while(zeroes > k){
            if(nums[left] === 0) zeroes--;
            left++;
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};
