function minSubArrayLen(target: number, nums: number[]): number {
   let ans = Infinity, sum = 0, left = 0;

    for(let right = 0; right < nums.length; right++){

        sum += nums[right];
        
            while(sum >= target){
                ans = Math.min(ans, right - left + 1);
                sum -= nums[left];
                left++;
            }
    }
    
    return ans === Infinity ? 0 : ans;
};
